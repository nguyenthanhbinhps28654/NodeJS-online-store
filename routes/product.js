var express = require('express');
var router = express.Router();
const productController = require('../mongo/product.controller');

// Trang hiển thị tất cả sản phẩm
router.get('/', async (req, res, next) => {
    try {
        const products = await productController.getAllProduct();
        res.render('product', { products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, mess: "Lỗi hệ thống" });
    }
});

// Trang thêm sản phẩm mới
router.get('/add', (req, res) => {
    res.render('addProduct');
});

// Thêm sản phẩm mới
router.post('/add', async (req, res) => {
    try {
        const body = req.body;
        await productController.addProduct(body);
        res.redirect('/product');
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, mess: 'Lỗi hệ thống' });
    }
});

// Trang chỉnh sửa sản phẩm
router.get('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productController.getIdProduct(id);
        res.render('editProduct', { product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, mess: 'Lỗi hệ thống' });
    }
});

// Chỉnh sửa sản phẩm
router.post('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        await productController.updateProduct(id, body);
        res.redirect('/product');
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, mess: 'Lỗi hệ thống' });
    }
});

// Xóa sản phẩm
router.post('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await productController.deleteProduct(id);
        res.redirect('/product');
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, mess: 'Lỗi hệ thống' });
    }
});

module.exports = router;
