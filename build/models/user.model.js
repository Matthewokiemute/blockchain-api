"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  isSeller: {
    type: Boolean,
    "default": false
  },
  desc: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("User", userSchema);
exports["default"] = _default;