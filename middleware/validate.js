module.exports = function validateBook(req, res, next) {
  const { title, author, publishedYear, genre } = req.body;
  if (!title || !author || !publishedYear || !genre) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  next();
};
