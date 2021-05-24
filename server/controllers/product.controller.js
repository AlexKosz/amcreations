const { response } = require('express');
const { Product } = require("../models/product.model");


module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err));
};

module.exports.findOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(product => res.json(product))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.json({ product: newProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
};
