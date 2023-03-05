const express = require("express");
const PropertyController = require("../controllers/property.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

const endPoint = "/properties";


//? Properties
router.get(`${endPoint}`, PropertyController.getAllProperties);
router.post(`${endPoint}`, TokenMiddleware, PropertyController.createProperty);
router.get(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.getAllPropertiesByUser);
router.delete(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.deleteProperty);
router.get(`${endPoint}/most-viewed`, PropertyController.getMostViewedProperties);
router.get(`${endPoint}/latest`, PropertyController.getLatestProperties);


//? Property Categories
router.get(`${endPoint}/categories`, PropertyController.getPropertyCategories);
router.post(`${endPoint}/categories`, PropertyController.createCategory);

//? Property Tools
router.delete(`${endPoint}`, PropertyController.toolsDeleteAllProperties);
router.delete(`${endPoint}/categories`, PropertyController.toolsDeleteAllCategories);

module.exports = router;
