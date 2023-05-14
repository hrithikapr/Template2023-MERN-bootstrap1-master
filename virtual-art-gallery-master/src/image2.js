'strict mode';

const api = require('../api/api');
const getexhibitionDataById = require('./ManageExhibition');
const selectedApi = new URLSearchParams(window.location.search).get("api");
const dataAccess = api[selectedApi] || api[api.default];
const text = require('./text');

let paintingCache = {};
let unusedTextures = [];

const dynamicQualThreshold = 2;
function dynamicQual(quality) {
	if(!navigator.connection || navigator.connection.downlink < dynamicQualThreshold) {
		quality = (quality == 'high') ? 'mid' : 'low';
	}
	return quality;
}

const resizeCanvas = document.createElement('canvas');
resizeCanvas.width = resizeCanvas.height = 2048;
const ctx = resizeCanvas.getContext('2d');
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
let aniso = false;

const emptyImage = (regl) => [
	(unusedTextures.pop() || regl.texture)([[[200, 200, 200]]]),
	_=>(unusedTextures.pop() || regl.texture)([[[0, 0, 0, 0]]]),
	1
];

function convertImageToBlob(imageUrl, cb) {
	return new Promise((resolve, reject) => {
	  const canvas = document.createElement('canvas');
	  const ctx = canvas.getContext('2d');
	  const img = new Image();
	  img.crossOrigin = 'anonymous';
	  img.onload = () => {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0);
		canvas.toBlob(resolve, 'image/jpeg');
	  };
	  img.onerror = reject;
	  img.src = imageUrl;
	});
  }

  const initArtworkData = (artList) => {
	console.log(artList);
	let apiUrl = 'http://localhost:5000';
	Promise.all(artList.map(async ({title, image}) => ({title, image : await convertImageToBlob(apiUrl+'/'+image) }) )).then(data => {
		console.log(data);
	})
  }
  

async function loadImage(regl, p, res) {
	if (aniso === false) {
		aniso = regl.hasExtension('EXT_texture_filter_anisotropic') ? regl._gl.getParameter(
			regl._gl.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT
		) : 0;
		console.log(aniso);
	}
	
	let image, title;
	try {
		getexhibitionDataById((artData) => {
			// console.log(artData);
			initArtworkData(artData.result.artworks);
		})
		// const data = await dataAccess.fetchImage(p, dynamicQual(res));
		const data = await dataAccess.fetchImage(p, dynamicQual(res));
		console.log(data);
		title = data.title;
		// Resize image to a power of 2 to use mipmap (faster than createImageBitmap resizing)
		image = await createImageBitmap(data.image);
		ctx.drawImage(image, 0, 0, resizeCanvas.width, resizeCanvas.height);
	} catch(e) {
		// Try again with a lower resolution, otherwise return an empty image
		console.error(e);
		return res == "high" ? await loadImage(regl, p, "low") : emptyImage(regl);
	}

	return [(unusedTextures.pop() || regl.texture)({
			data: resizeCanvas,
			min: 'mipmap',
			mipmap: 'nice',
			aniso,
			flipY: true
		}),
		width=>text.init((unusedTextures.pop() || regl.texture), title, width),
		image.width / image.height
	];
}

module.exports = {
	fetch: (regl, count = 10, res = "low", cbOne, cbAll) => {
		const from = Object.keys(paintingCache).length;
		dataAccess.fetchList(from, count).then(paintings => {
			count = paintings.length;
			paintings.map(p => {
				if (paintingCache[p.image_id]) {
					if (--count === 0)
						cbAll();
					return;
				}
				paintingCache[p.image_id] = p;
				loadImage(regl, p, res).then(([tex, textGen, aspect]) => {
					cbOne({ ...p, tex, textGen, aspect });
					if (--count === 0)
						cbAll();
				});
			})
		});
	},
	load: (regl, p, res = "low") => {
		if (p.tex || p.loading)
			return;
		p.loading = true;
		loadImage(regl, p, res).then(([tex, text]) => {
			p.loading = false;
			p.tex = tex;
			p.text = text;
		});
	},
	unload: (p) => {
		if (p.tex) {
			unusedTextures.push(p.tex);
			p.tex = undefined;
		}
		if (p.text) {
			unusedTextures.push(p.text);
			p.text = undefined;
		}
	}
};