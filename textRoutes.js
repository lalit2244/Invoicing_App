// File: backend/routes/textRoutes.js
const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');

// GET /api/texts/:page/:language
router.get('/:page/:language', textController.getTexts);

// GET /api/texts/menu/:language
router.get('/menu/:language', textController.getMenuTexts);

module.exports = router;