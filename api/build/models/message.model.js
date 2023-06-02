"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var MessageSchema = new Schema({
  conversationID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("Message", MessageSchema);
exports["default"] = _default;