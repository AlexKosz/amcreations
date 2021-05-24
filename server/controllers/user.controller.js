const { response } = require('express');
const { User } = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
};

module.exports.findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newUser => res.json({ user: newUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


