const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookscontrollers');

// Read all books
router.get('/', controller.getAllBooks);

// Read one book by ID
router.get('/:id', controller.getBookById);

// Add a new book
router.post('/', controller.addBook);

// Update an existing book
router.put('/:id', controller.updateBook);

// Delete a book
router.delete('/:id', controller.deleteBook);

module.exports = router;
