import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
  gigID: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
    enum: [1,2,3,4,5]
  },
  desc: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema)