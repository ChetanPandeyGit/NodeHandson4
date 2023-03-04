const express = require("express");
const router = express.Router();
const registerController = require('../apiControllers/register')

router.post('/register', registerController.userRegisterController);

module.exports = router;