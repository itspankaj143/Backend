const express = require('express')
const router = express.Router()
const itemscontroller = require('../controllers/items-controllers')

router.post('/', itemscontroller.postItems)
router.get('/', itemscontroller.getallItems)
router.get('/:id', itemscontroller.getbyIdItems)
router.put('/:id', itemscontroller.updateItemsbyId)
router.delete('/:id', itemscontroller.deleteitembyId)

module.exports = router
