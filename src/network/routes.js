const express = require('express');
const product = require('../components/product/network');
const category = require('../components/category/network')

const routes = function (server) {
    server.use('/products', product);
    server.use('/categories', category);
}

module.exports = routes;