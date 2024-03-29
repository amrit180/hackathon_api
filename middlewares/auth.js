const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  console.log(req.headers.authtoken);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    console.log(firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
