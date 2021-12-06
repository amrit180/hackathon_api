const User = require("../models/user");

exports.userDetails = async (req, res, next) => {
  const { email } = req.user;
  const { name, batch, number, college, photo, verified } = req.body;
  console.log(photo);
  const user = await User.findOneAndUpdate(
    { email },
    {
      name,
      batch,
      number,
      college,
      photo,
      verified,
    },
    { new: true }
  ).exec();
  res.json(user);
};
