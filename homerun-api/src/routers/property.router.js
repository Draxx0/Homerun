import express from "express";
import PropertyController from "../controllers/property.controller.js";
import TokenMiddleware from "../middlewares/token.middleware.js";
const propertyRouter = express.Router();

const endPoint = "/properties";


//? Properties
propertyRouter.get(`${endPoint}`, PropertyController.getAllProperties);
propertyRouter.get(`${endPoint}/get/:id`, PropertyController.getOneProperty);
propertyRouter.post(`${endPoint}`, TokenMiddleware, PropertyController.createProperty);
propertyRouter.get(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.getAllPropertiesByUser);
propertyRouter.delete(`${endPoint}/user/:id`, TokenMiddleware, PropertyController.deleteProperty);
propertyRouter.get(`${endPoint}/most-viewed`, PropertyController.getMostViewedProperties);
propertyRouter.get(`${endPoint}/latest`, PropertyController.getLatestProperties);
propertyRouter.put(`${endPoint}/add-view/:id`, PropertyController.addPropertyView);


//? Property Categories
propertyRouter.get(`${endPoint}/categories`, PropertyController.getPropertyCategories);
propertyRouter.post(`${endPoint}/categories`, PropertyController.createCategory);

//? Property Comments
propertyRouter.get(`${endPoint}/comments/:id`, PropertyController.getPropertyComments);
propertyRouter.post(`${endPoint}/comments/:id`, TokenMiddleware, PropertyController.createComment);

//? Property Tools
propertyRouter.delete(`${endPoint}`, PropertyController.toolsDeleteAllProperties);
propertyRouter.delete(`${endPoint}/categories`, PropertyController.toolsDeleteAllCategories);
propertyRouter.delete(`${endPoint}/comments`, PropertyController.toolsDeleteAllComments);

export default propertyRouter;
