const mongoose = require('mongoose')
const ItemsSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	availabiltiy: {
		type: Boolean,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
})
module.exports = new mongoose.model('Item', ItemsSchema)
