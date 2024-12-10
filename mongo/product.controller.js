const productModel = require('./product.model');

module.exports = { getAllProduct, getIdProduct, deleteProduct, addProduct, updateProduct }

async function getAllProduct() {
    try {
        const result = await productModel.find().sort({_id: -1});
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getIdProduct(id) {
    try {
        const result = await productModel.findById(id);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const result = await productModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function addProduct(body) {
    try {
        const { name, img, price, description } = body;
        const newProduct = new productModel({ name, img, price, description });
        const result = await newProduct.save();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateProduct(id, body) {
    try {
        const { name, img, price, description } = body;
        const result = await productModel.findByIdAndUpdate(id, { name, img, price, description }, { new: true });
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
