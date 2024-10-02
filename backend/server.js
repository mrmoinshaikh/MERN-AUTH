import express from 'express';
const app = express(); // Initialize the app

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send a basic response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
