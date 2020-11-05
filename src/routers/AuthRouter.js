const express = require('express');

const { userValidator } = require('../validators/index.js');
const { UserController } = require('../controllers/index.js');

const router = express.Router();

router.post('/signup', userValidator.signup, UserController.signup);

router.post('/login', userValidator.login, UserController.login);

module.exports = router;

