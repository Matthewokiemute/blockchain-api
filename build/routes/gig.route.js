"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _jwt = require("../middleware/jwt.js");
var _gigController = require("../controllers/gig.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/", _jwt.verifyToken, _gigController.createGig);
router["delete"]("/:id", _jwt.verifyToken, _gigController.deleteGig);
router.get("/single/:id", _gigController.getGig);
router.get("/", _gigController.getGigs);
var _default = router;
exports["default"] = _default;