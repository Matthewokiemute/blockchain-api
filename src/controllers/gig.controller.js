import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) next(createError(403, "Only sellers can create a gig!"));

  const newGig = new Gig({
    userID: req.userID,
    ...req.body,
  });

  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userID !== req.userID)
      return next(createError(403, "You can only delete your gigs!"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted successfully!");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) next(createError(404, "Gig not found!"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userID && { userID: q.userID }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && { price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) } }),
    ...(q.search && {title: { $regex: q.search, $option: "i" }}),
  };
  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1});
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};
