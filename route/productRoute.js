const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');

router.get('/',controller.index);

module.exports = router;