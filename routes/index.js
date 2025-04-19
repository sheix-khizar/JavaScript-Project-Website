const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' });
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

// Project page
router.get('/project', (req, res) => {
  res.render('pages/project', { title: 'Projects' });
});

module.exports = router;
