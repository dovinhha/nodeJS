const express = require('express');

const router = express.Router();
const controller = require('../controller/cartController');

router.get('/add/:productId',controller.addToCart);
router.get('/',controller.cart);

module.exports = router;