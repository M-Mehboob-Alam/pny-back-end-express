const express = require('express');
const router = express.Router();
// importing controller
const {registerUser} = require('../controllers/registerUser');


router.post('/register/user', registerUser);

module.exports = router;