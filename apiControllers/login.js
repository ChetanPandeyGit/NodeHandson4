const jwt = require('jsonwebtoken');
const CONSTANTS = require('../config/constant')

const userLoginController = (req, res) => {
    console.log('User logging in');
    const userDetails = req.body;
    if (userDetails.username && userDetails.password) {
        console.log('Login Details =>', userDetails);
        const jwtToken = jwt.sign(userDetails, CONSTANTS.KEY);
        return res.status(200).send({'Token:': jwtToken})
    }
    else {
        return res.status(400).send({ message: 'Invalid Credentials' })
    }
}

module.exports = { userLoginController };