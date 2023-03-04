const express = require("express");
const route = express.Router();
const loginController = require('../apiControllers/login');

route.post('/login',  loginController.userLoginController);    

module.exports = route;