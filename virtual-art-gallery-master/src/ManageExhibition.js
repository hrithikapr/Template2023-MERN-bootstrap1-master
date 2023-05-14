const getexhibitionDataById = (cb) => {
    fetch('http://localhost:5000/exhibition/getbyid/6460c196912690138c16e986')
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        cb(data);
    })
    .catch((err) => {
            console.error(err);
    });
};

module.exports = getexhibitionDataById;