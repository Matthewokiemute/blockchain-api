"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var GigSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  totalStars: {
    type: Number,
    "default": 0
  },
  starNumber: {
    type: Number,
    "default": 0
  },
  cat: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: false
  },
  shortTitle: {
    type: String,
    required: true
  },
  shortDesc: {
    type: String,
    required: true
  },
  deliveryTime: {
    type: Number,
    required: true
  },
  revisionNumber: {
    type: Number,
    required: true
  },
  features: {
    type: [String],
    required: false
  },
  sales: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Gig", GigSchema);
exports["default"] = _default;