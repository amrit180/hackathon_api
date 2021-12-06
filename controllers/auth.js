const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      {
        name: req.user.name,
        email: req.user.email,
      },
      { new: true }
    ).exec();

    if (!user) {
      const newUser = await new User({
        name: req.user.name,
        email: req.user.email,
      }).save();
      console.log(newUser);
    }
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.currentUser = async (req, res) => {
  await User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
