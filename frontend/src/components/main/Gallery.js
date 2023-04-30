import React from 'react';
import Regl from 'react-regl';
import * as THREE from 'three';
import regl from 'regl';

const width = window.innerWidth;
const height = window.innerHeight;



const Gallery = () => {

        const onFrame = regl({
          onBeforeDraw: ({ viewportWidth, viewportHeight }) => {
            regl.clear({
              color: [0, 0, 0, 1],
              depth: 1,
            });
            camera.aspect = viewportWidth / viewportHeight;
            camera.updateProjectionMatrix();
          },
          onDraw: ({ time }) => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            const gl = regl._gl;
            const renderer = new THREE.WebGLRenderer({ context: gl });
            renderer.render(scene, camera);
          },
        });

        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
          );
          
          const scene = new THREE.Scene();
          const geometry = new THREE.BoxGeometry(10, 10, 10);
          const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          const cube = new THREE.Mesh(geometry, material);
          scene.add(cube);
          
          camera.position.z = 20;
          
      
        return (
          <Regl
            onFrame={onFrame}
            width={width}
            height={height}
            backgroundColor={[1, 1, 1, 1]}
          />
        );
      
}

export default Gallery;