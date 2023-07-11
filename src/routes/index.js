const express = require('express');
const router = express.Router();

const persistController = require('../controllers/persist.controller');

router.post('/upload', persistController.upload);

module.exports = router;