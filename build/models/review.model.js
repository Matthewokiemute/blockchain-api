"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var reviewSchema = new Schema({
  gigID: {
    type: String,
    required: true
  },
  star: {
    type: Number,
    required: true,
    "enum": [1, 2, 3, 4, 5]
  },
  desc: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Review", reviewSchema);
exports["default"] = _default;