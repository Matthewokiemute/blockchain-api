"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createError = function createError(status, message) {
  var err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
var _default = createError;
exports["default"] = _default;