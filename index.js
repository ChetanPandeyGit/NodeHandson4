const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);

app.get('/',(req, res)=> {
    res.send('Home Page')
})

app.listen(3333, () => {
    console.log('Server Started, Listening at http://localhost:3333');
})