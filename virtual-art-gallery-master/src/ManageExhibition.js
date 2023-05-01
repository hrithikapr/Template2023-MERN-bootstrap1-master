const getexhibitionDataById = () => {
    fetch('http://localhost:5000/exhibition/getall')
    .then((res) => res.json())
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        
    });
};

module.exports = getexhibitionDataById;