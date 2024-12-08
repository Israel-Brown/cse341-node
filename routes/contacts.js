const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact'); // Contact model (defined below)

// GET: Retrieve all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving contacts', error: err });
  }
});

// POST: Create a new contact
router.post('/', async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;

  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newContact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
  try {
    const savedContact = await newContact.save();
    res.status(201).json({ id: savedContact._id, message: 'Contact created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating contact', error: err });
  }
});

// PUT: Update an existing contact
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact updated successfully', updatedContact });
  } catch (err) {
    res.status(500).json({ message: 'Error updating contact', error: err });
  }
});

// DELETE: Delete a contact
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting contact', error: err });
  }
});

module.exports = router;
