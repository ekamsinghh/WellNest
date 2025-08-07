const express= require('express');
const { createSession, getSessionById, deleteSession, getMySessions } = require('../../controller/sessionController');
const router=express.Router();
const { protect } = require('../../middleware/authmiddleware');

router.post('/create',protect,createSession);
router.get('/my-sessions',protect, getMySessions);
router.get('/:id',protect,getSessionById);
router.delete('/:id',protect,deleteSession);

module.exports = router;