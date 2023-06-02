"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _jwt = require("../middleware/jwt.js");
var _reviewController = require("../controllers/review.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/", _jwt.verifyToken, _reviewController.createReview);
router.get("/:id", _reviewController.getReviews);
router["delete"]("/:id", _jwt.verifyToken, _reviewController.deleteReview);
var _default = router;
exports["default"] = _default;