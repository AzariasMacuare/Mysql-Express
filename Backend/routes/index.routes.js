// Router
const { Router } = require('express');
const router = Router();

// Controllers
const people = require('../controllers/index.controllers');

// Set Routes
router.get('/', people.get);
router.get('/:id', people.getOne);
router.post('/', people.post);
router.delete('/:id', people.delete);
router.put('/:id', people.put)

// Exporting
module.exports = router;