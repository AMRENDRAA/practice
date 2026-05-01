const express = require('express');
const router = express.Router();

const { creategymmember, getgymmember, gymdeleteuser } = require('../controllers/gymController');



router.get('/', getgymmember)
router.post('/', creategymmember
)
router.delete('/:id', gymdeleteuser)

module.exports = router;