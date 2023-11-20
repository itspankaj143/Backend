const Items = require('../models/items-Schema')

const postItems = async (req, res, next) => {
	const { name, description, price, availabiltiy } = req.body
	let item
	try {
		item = new Items({
			name,

			description,
			price,
			availabiltiy,
		})
		await item.save()
	} catch (e) {
		console.log(e)
	}
	if (!item) {
		return res.status(500).json({ message: "Can't Created" })
	} else {
		return res.status(201).json({ item })
	}
	// next();
}

const getallItems = async (req, res) => {
	let item
	try {
		item = await Items.find()
	} catch (e) {
		console.log(e)
	}
	if (!item) {
		res.status(400).send('items not Found')
	} else {
		res.status(200).json(item)
	}
}

const getbyIdItems = async (req, res) => {
	const _id = req.params.id
	let item
	try {
		item = await Items.findById({ _id })
	} catch (e) {
		console.log(e)
	}
	if (!item) {
		res.status(400).send({ message: 'items not Found' })
	} else {
		res.status(200).json(item)
	}
}

const updateItemsbyId = async (req, res) => {
	const _id = req.params.id
	const { name, description, price, availabiltiy } = req.body
	let item
	try {
		item = await Items.findByIdAndUpdate(
			{ _id },
			{
				name,

				description,
				price,
				availabiltiy,
			},
			{ new: true }
		)
	} catch (e) {
		console.log(e)
	}
	if (!item) {
		res.status(400).send({ message: 'item not Found' })
	} else {
		res.status(201).json(item)
	}
}

const deleteitembyId = async (req, res) => {
	const _id = req.params.id
	let item
	try {
		item = await Items.findByIdAndDelete({ _id })
	} catch (e) {
		console.log(e)
	}
	if (!item) {
		res.status(404).send({ message: 'Item not Found' })
	} else {
		res.status(202).json(item)
	}
}

exports.postItems = postItems
exports.getallItems = getallItems
exports.getbyIdItems = getbyIdItems
exports.updateItemsbyId = updateItemsbyId
exports.deleteitembyId = deleteitembyId
