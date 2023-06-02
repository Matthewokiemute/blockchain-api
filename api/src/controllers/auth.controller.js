import userModel from "../models/user.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    // Hashing Password-Encrypting it
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body, //Spread operator - lists out all the contents
      password: hash,
    });
    // This saves the new User to DB
    await newUser.save();
    res.status(201).send("User has been created!");
  } catch (err) {
    next(err)
  }
};

export const login = async (req, res, next) => {
  try {
    // Checks DB for the user's username you provided
    const user = await User.findOne({ username: req.body.username });
    // If the user doesn't exist
    
    if (!user) 
      return next(createError(404, "User not found!"))

    // Checking if password matches that in DB
    const isPwdCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPwdCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc; //It excludes the password from been sent to the client-side
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res.clearCookie("accessToken", {
    sameSite: "none",
    secure: true,
  })
  .status(200)
  .send("User has been logged out!")
};
