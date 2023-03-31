import express from "express";
const uploadRouter = express.Router();
import UploadController from "../controllers/upload.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadArr = multer({ storage: storage }).array("files");

uploadRouter.post("/properties/upload-images", uploadArr, UploadController.upload);

export default uploadRouter;
