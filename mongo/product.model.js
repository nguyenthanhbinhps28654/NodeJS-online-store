const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.models.product || mongoose.model('product', productSchema);
