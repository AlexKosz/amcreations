const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: { type: String, required: [true, "First name is required"] },
	lastName: { type: String, required: [true, "Last n      ame is required"] },
	username: { type: String, required: [true, "Username is required"] },
	password: { type: String, required: [true, "Password is required"] },
	streetAddress: { type: String, required: [true, "Address is required"] },
	city: { type: String, required: [true, "city is required"] },
	state: { type: String, required: [true, "State is required"] },
	zipCode: { type: Number, required: [true, "Zip code is required"] },
	email: { type: String, required: [true, "Email required"] },
	cart: { type: Array, required: [false] },
	reviews: { type: Array, required: [false] },
	orders: { type: Array, required: [false] }
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema)