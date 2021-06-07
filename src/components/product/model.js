const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categoryId: {
        type: Schema.ObjectId,
        ref: 'Category',
    },
    image: String,
});

const model = mongoose.model('Product', mySchema);
module.exports = model;