import { Router } from "express";
import multer from "multer";

import uploadConfig from '../config/upload';

import { UploadImagesService } from "../services/upload-images-service";



const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', upload.single('image'), async (request, response) => {
  const { file } = request;

  const uploadImagesService = new UploadImagesService();

  await uploadImagesService.execute(file);

  return response.json({ success: true });
});

export default routes;