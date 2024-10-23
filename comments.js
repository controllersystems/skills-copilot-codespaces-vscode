// Create web server
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server running on port 3000!'));

// Import comments data
const comments = require('./comments');