const express = require('express');

const controller = require('../controller/authController');

const authRouter = express.Router();

authRouter.get('/login',controller.login);
authRouter.post('/login',controller.postLogin);

module.exports = authRouter;
