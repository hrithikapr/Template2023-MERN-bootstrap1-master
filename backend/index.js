const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/userRouter');
const artRouter = require('./routers/artRouter');
const exhibitionRouter = require('./routers/exhibitionRouter');
const cors = require('cors');
const { PORT } = require('./config');

const app = express();

app.use(cors(
    {
        origin : '*',
        credentials : true
    }
));
app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use('/user', userRouter);
app.use('/art', artRouter);
app.use('/exhibition', exhibitionRouter);


app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));