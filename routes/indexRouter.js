const express = require('express');
const router = express.Router();

const controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', controller.index);
router.get('/before', controller.before);

module.exports = router;
