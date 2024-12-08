const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getItems);  // Retrieve all items
router.post('/', itemController.createItem);  // Create a new item
router.put('/:id', itemController.updateItem);  // Update an existing item
router.delete('/:id', itemController.deleteItem);  // Delete an item

module.exports = router;
