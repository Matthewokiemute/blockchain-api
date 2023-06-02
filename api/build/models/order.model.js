"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var OrderSchema = new Schema({
  gigID: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sellerID: {
    type: String,
    required: true
  },
  buyerID: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    "default": false
  },
  payment_intent: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Order", OrderSchema);
exports["default"] = _default;