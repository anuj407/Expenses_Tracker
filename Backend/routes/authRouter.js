var express = require('express');
const { signup, login } = require('../Controllers/AuthController');
const {signupValidation,loginValidation} = require('../Middleware/authValidation')
var router = express.Router();


router.post('/login',loginValidation, login)
router.post('/signup',signupValidation, signup)
module.exports = router;
