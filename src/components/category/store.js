const Model = require('./model');

async function listCategories(categoryId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (categoryId !== null) {
            filter = { _id: categoryId };
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

function addCategory(category){
    const myCategory = new Model(category);
    myCategory.save();
}

async function updateCategory(id, name, image){
    const foundCategory = await Model.findOne({
        _id: id
    });

    foundCategory.name = name;
    foundCategory.image = image;

    const newCategory = await foundCategory.save();
    return newCategory;

}

function removeCategory(id){
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    list : listCategories,
    add : addCategory,
    updateC : updateCategory,
    remove : removeCategory,
}