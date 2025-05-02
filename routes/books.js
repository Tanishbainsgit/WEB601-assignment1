const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookscontrollers');
const validateBook = require('../middleware/validate');

router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);
router.post('/', validateBook, controller.addBook);
router.put('/:id', validateBook, controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;
