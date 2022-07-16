const router = require("express").Router();
const homeRoutes = require("../apiRoutes/homeRoutes");
const notesRoutes = require("../apiRoutes/notesRoutes");

router.use(homeRoutes);
router.use(notesRoutes);

module.exports = router;
