const store = require('./store');
const { config } = require('../../config');

function getCategories(categoryId){
    return store.list(categoryId);
}

function addCategory(name, image){
    return new Promise((resolve, reject) => {
        if(!name || !image){
            console.error('[categoryController] No hay algun parametro')
            reject('Los datos son incorrectos');
            return false;
        }

        let fileImage = '';
        if(image){
            fileImage = config.host + ':' + config.port + config.publicRoute + '/' + config.categoryImageRoute + '/' + image;
        }

        const fullCategory = {
            name: name,
            image: fileImage,
        }

        store.add(fullCategory);

        resolve(fullCategory);
        
    })
}

function updateCategory(id, name, image){
    return new Promise(async (resolve, reject) => {
        if(!id || !name || !image){
            reject('Invalid data');
            return false;
        }

        const result = await store.updateC(id, name, image);

        resolve(result);
    })
}

function deleteCategory(id){
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
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
}