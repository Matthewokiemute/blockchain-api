"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/user.controller.js");
var _jwt = require("../middleware/jwt.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// router.get("/register", );
// router.get("/login", );
router["delete"]("/:id", _jwt.verifyToken, _userController.deleteUser);
router.get("/:id", _jwt.verifyToken, _userController.getUser);
var _default = router;
exports["default"] = _default;