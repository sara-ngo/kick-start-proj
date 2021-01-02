const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./apiRoutes');
router.use('/api', apiRoutes);
module.exports = router;