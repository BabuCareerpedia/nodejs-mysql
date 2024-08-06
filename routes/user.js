const express = require('express');
const router = express.Router();
const { createUser } = require('../controller/user');

router.post('/users', createUser);
router.get('./')

module.exports = router;
