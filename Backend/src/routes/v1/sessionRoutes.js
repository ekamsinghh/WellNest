const express= require('express');
const { createSession, getSessionById, deleteSession, getMySessions, getPublishedSessions, toggle } = require('../../controller/sessionController');
const router=express.Router();
const { protect } = require('../../middleware/authmiddleware');

router.post('/create',protect,createSession);
router.get('/my-sessions',protect, getMySessions);
router.get('/published',protect,getPublishedSessions);
router.get('/:id',protect,getSessionById);
router.delete('/:id',protect,deleteSession);
router.post('/toggle-status',protect,toggle);

module.exports = router;