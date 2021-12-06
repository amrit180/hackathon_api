const { userDetails } = require("../controllers/user");
const { authCheck } = require("../middlewares/auth");

const router = require("express").Router();

router.put("/update-user", authCheck, userDetails);

module.exports = router;
