const express= require('express');
const auth = require("./v1/authRoutes");
const router=express.Router();

router.use('/v1/auth',auth);

module.exports = router;