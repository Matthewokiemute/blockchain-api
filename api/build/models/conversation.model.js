"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var ConversationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  sellerID: {
    type: String,
    required: true
  },
  buyerID: {
    type: String,
    required: true
  },
  readByBuyer: {
    type: Boolean,
    "default": false
  },
  readBySeller: {
    type: Boolean,
    "default": false
  },
  lastMessage: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Conversation", ConversationSchema);
exports["default"] = _default;