const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
});

const model = mongoose.model('Category', mySchema);
module.exports = model;