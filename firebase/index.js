const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey.json");
// const { countDocuments } = require("../models/user");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
