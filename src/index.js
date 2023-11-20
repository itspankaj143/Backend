const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routers/items-routers')

app.use(express.json())
app.use('/api/items', router)

mongoose
	.connect(
		'mongodb+srv://itsmelovezero:J7xd1WzVe3Nl1aBD@cluster0.ch0ygd8.mongodb.net/ITEMSCOLLECTION?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connection Successfull')
	})
	.then(() => {
		app.listen(3000, () => {
			console.log(`Server is ruuning on http://localhost:3000`)
		})
	})
	.catch((e) => {
		console.error('Error', e)
	})
