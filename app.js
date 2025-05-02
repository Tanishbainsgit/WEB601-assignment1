const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const bookRoutes = require('./routes/books');

app.use(express.json());

// Route for book APIs
app.use('/api/books', bookRoutes);

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
