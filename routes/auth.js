const { createOrUpdateUser, currentUser } = require("../controllers/auth");
const { authCheck } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);

module.exports = router;
