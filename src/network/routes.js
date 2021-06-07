const express = require('express');
const product = require('../components/product/network');
const category = require('../components/category/network')

const routes = function (server) {
    server.use('/api/products', product);
    server.use('/api/categories', category);
}

module.exports = routes;
