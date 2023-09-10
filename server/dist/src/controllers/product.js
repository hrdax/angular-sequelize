"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: 'get products'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        msg: 'get product',
        id: req.params.id
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    res.json({
        msg: 'delete product',
        id: req.params.id
    });
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post product',
        body
    });
    console.log(body);
};
exports.postProduct = postProduct;
