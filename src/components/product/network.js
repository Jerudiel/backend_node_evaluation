const express = require('express');
const response = require('../../network/reponse');
const controller = require('./controller');
const router = express.Router();

router.get('/:id?', function (req, res) {
    const filterProducts = req.params.id || null;
    controller.getProducts(filterProducts)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

router.post('/', function (req, res) {
    controller.addProduct(req.body.name, req.body.price, req.body.description, req.body.categoryId, req.body.image)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

router.put('/:id', function (req, res) {
    console.log("put product");
    controller.updateProduct(req.params.id, req.body.name, req.body.price, req.body.description, req.body.categoryId, req.body.image)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', function (req, res) {
    console.log("delete product");
    controller.deleteProduct(req.params.id)
    .then(() => {
        response.success(req, res, `Producto ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;