const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        try {
            const products = await Product.find();

            return res.json(products);
        } catch (error) {
            return res.json(error);
        }
    },

    async store(req, res) {
        try {
            const product = await Product.create(req.body);

            return res.json(product);
        } catch (error) {
            return res.json(error);
        };
    },
}