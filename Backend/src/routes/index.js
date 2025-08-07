const express= require('express');
const auth = require("./v1/authRoutes");
const session = require("./v1/sessionRoutes");
const router=express.Router();

router.use('/v1/auth',auth);
router.use('/v1/session',session);

module.exports = router;