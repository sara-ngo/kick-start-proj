const router = require('express').Router();
const { route } = require('..');
const commentRoutes = require("./commentRoutes");
const replyRoutes = require("./replyRoutes");
router.use("/comments", commentRoutes);
router.use("/reply", replyRoutes);
module.exports = router;