const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  batch: String,
  college: String,
  verified: String,
  photo: {
    type: String,
    default:
      "https://res.cloudinary.com/amrit180/image/upload/v1638648004/istockphoto-1223671392-170667a_ktn87x.jpg",
  },
});
module.exports = mongoose.model("User", userSchema);
