const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const bookRoutes = require('./routes/books');

app.use(express.json());
app.use('/api/books', bookRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
