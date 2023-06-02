import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user)
    // if(!token) return next(createError(401, "You are not authenticated!"))

        if (req.userID !== user._id.toString()) {
           return next(createError(403, "You can only delete your account!"))
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted!")
}

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user)
    if(!token) return next(createError(401, "You are not authenticated!"))
    res.status(200).send(user);
}