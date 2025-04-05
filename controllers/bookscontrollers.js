let books = require('../data/booksdata');

// GET all books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET a single book
exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

// POST new book
exports.addBook = (req, res) => {
  const { title, author, publishedYear, genre, available } = req.body;

  if (!title || !author || !publishedYear || !genre) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newBook = {
    id: Date.now().toString(),
    title,
    author,
    publishedYear,
    genre,
    available: available ?? true
  };

  books.push(newBook);
  res.status(201).json({ message: 'Book added', book: newBook });
};

// PUT update book
exports.updateBook = (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books[index] = { ...books[index], ...req.body };
  res.status(200).json({ message: 'Book updated', book: books[index] });
};

// DELETE a book
exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(index, 1);
  res.status(204).send();
};
