const express = require('express');
const response = require('../../network/reponse');
const controller = require('./controller');
const router = express.Router();

router.get('/:id?', function (req, res) {
    const filterCategory = req.params.id || null;
    controller.getCategories(filterCategory)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

router.post('/', function (req, res) {
    console.log("post category");
    controller.addCategory(req.body.name, req.body.image)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

router.put('/:id', function (req, res) {
    console.log("put category");
    controller.updateCategory(req.params.id, req.body.name, req.body.image)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', function (req, res) {
    console.log("delete category");
    controller.deleteCategory(req.params.id)
    .then(() => {
        response.success(req, res, `Categoria ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;