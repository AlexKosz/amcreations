const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Name is required"] },
	imageURL1: { type: String, required: [true, "At least one image is required"] },
	imageURL2: { type: String, required: [false] },
	imageURL3: { type: String, required: [false] },
	price: { type: Number, required: [true, "Price is required"] },
	description: { type: String, required: [true, "Description is required"] },
	colorOptions: { type: Array, required: [true, "Color options required"] },
	reviews: { type: Array, required: [false] },
	timesPurchased: { type: Number, required: [true, "Times purchased required"] }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema)
