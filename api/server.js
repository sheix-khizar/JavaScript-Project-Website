const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // Specify the default layout file

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/projects', require('./routes/project'));  // Use the project route




module.exports.handler = serverless(app);
