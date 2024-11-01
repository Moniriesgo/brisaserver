const express = require('express');

const guiasController = require('../controller/guiasController');


const router = express.Router();

router.get('/',guiasController.getGuias);
router.post('/',guiasController.createGuias);
router.delete('/',guiasController.deleteGuias);

module.exports = router;