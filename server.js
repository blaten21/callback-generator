const express = require('express');
const app = express();

// Use the built-in express.json() middleware to parse incoming JSON payloads
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up a POST route at the /confirmation path
app.post('/confirm', (req, res) => {
  // Respond with a static JSON template
  res.json({
    status: 'success',
    message: 'What do you want to respond with?'
    // ... any other key-value pairs you want to send in the template
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
