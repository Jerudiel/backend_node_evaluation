const Model = require('./model');

async function listProducts(productId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (productId !== null) {
            filter = { _id: productId, };
        }
        Model.find(filter)
            .populate('category')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            });
    });
} 

function addProduct(product){
    const myProduct = new Model(product);
    myProduct.save();
}

async function updateProduct(id, name, price, description, categoryId, image){
    const foundProduct = await Model.findOne({
        _id: id
    });

    foundProduct.name = name;
    foundProduct.price = price;
    foundProduct.description = description;
    foundProduct.categoryId = categoryId;
    foundProduct.image = image;

    const newProduct = await foundProduct.save();
    return newProduct;

}

function removeProduct(id){
    return Model.deleteOne({
        _id: id
    });
}


module.exports = {
    list : listProducts,
    add : addProduct,
    updateP : updateProduct,
    remove : removeProduct,
}

