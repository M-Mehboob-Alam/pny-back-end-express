const express = require('express');
const router = express.Router();

// importing controller 

const {createProduct,getProducts, getSingleProduct,updateSingleProduct,deleteSingleProduct,searchProduct}= require('../controllers/product');

router.post('/create/new/product', createProduct);
router.get('/get/all/products', getProducts);
router.get('/get/a/single/product/:id', getSingleProduct);
router.put('/update/a/single/product/:id', updateSingleProduct);
router.delete('/delete/a/single/product/:id', deleteSingleProduct);
router.get('/search/product/:q', searchProduct);

module.exports = router;