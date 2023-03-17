const express = require("express");
const PropertyController = require("../controllers/property.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

const endPoint = "/properties";


//? Properties
router.get(`${endPoint}`, PropertyController.getAllProperties);
router.get(`${endPoint}/get/:id`, PropertyController.getOneProperty);
router.post(`${endPoint}`, TokenMiddleware, PropertyController.createProperty);
router.get(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.getAllPropertiesByUser);
router.delete(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.deleteProperty);
router.get(`${endPoint}/most-viewed`, PropertyController.getMostViewedProperties);
router.get(`${endPoint}/latest`, PropertyController.getLatestProperties);
router.put(`${endPoint}/add-view/:id`, PropertyController.addPropertyView);


//? Property Categories
router.get(`${endPoint}/categories`, PropertyController.getPropertyCategories);
router.post(`${endPoint}/categories`, PropertyController.createCategory);

//? Property Categories
router.get(`${endPoint}/comments/:id`, PropertyController.getPropertyComments);
router.post(`${endPoint}/comments/:id`, TokenMiddleware, PropertyController.createComment);

//? Property Tools
router.delete(`${endPoint}`, PropertyController.toolsDeleteAllProperties);
router.delete(`${endPoint}/categories`, PropertyController.toolsDeleteAllCategories);
router.delete(`${endPoint}/comments`, PropertyController.toolsDeleteAllComments);

module.exports = router;
