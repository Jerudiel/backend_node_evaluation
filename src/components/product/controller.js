const store = require('./store');
const { config } = require('../../config');

function getProducts(productId){
    return store.list(productId);
}

function addProduct(name, price, description, categoryId, image){
    return new Promise((resolve, reject) => {
        if(!name || !price || !description || !categoryId || !image){
            console.error('[productController] No hay algun parametro')
            reject('Los datos son incorrectos');
            return false;
        }

        let fileImage = '';
        if(image){
            fileImage = config.host + ':' + config.port + config.publicRoute + '/' + config.productImageRoute + '/' + image;
        }

        const fullProduct = {
            name: name,
            price: price,
            description: description,
            categoryId: categoryId,
            image: fileImage,
        }

        store.add(fullProduct);

        resolve(fullProduct);
        
    })
}

function updateProduct(id, name, price, description, categoryId, image){
    return new Promise(async (resolve, reject) => {
        if(!id || !name || !price || !description || !categoryId || !image){
            reject('Invalid data');
            return false;
        }

        const result = await store.updateP(id, name, price, description, categoryId, image);

        resolve(result);
    })
}

function deleteProduct(id){
    return new Promise((resolve, reject) => {
        if(!id){
            reject('Id invalido');
            return false;
        }

        store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })
    });
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
}