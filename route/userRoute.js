const express = require ('express');
const multer  = require('multer')

const router = express.Router();
const controller = require('../controller/userController');
const uservalidate = require('../validate/userValidate');
const upload = multer({ dest: './public/uploads/' })

router.get('/',controller.index);
router.get('/search',controller.search);
router.get('/create',controller.getCreate);
router.post('/create',upload.single('avatar'),uservalidate.postCreate,controller.postCreate);
router.get('/:id',controller.view);

module.exports = router;