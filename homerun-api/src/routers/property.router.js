const express = require("express");
const PropertyController = require("../controllers/property.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

const endPoint = "/properties";

router.get(`${endPoint}`, PropertyController.getAllProperties);
router.post(`${endPoint}`, TokenMiddleware, PropertyController.createProperty);
router.get(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.getAllPropertiesByUser);
router.delete(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.deleteProperty);

module.exports = router;
