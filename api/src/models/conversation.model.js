import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sellerID: {
    type: String,
    required: true,
  },
  buyerID: {
    type: String,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    default: false,
  },
  readBySeller: {
    type: Boolean,
    default: false,
  },
  lastMessage: {
    type: String,
    required: false,
  },
}, { timestamps: true });

export default mongoose.model("Conversation", ConversationSchema)