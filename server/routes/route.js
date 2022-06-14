import express from "express";

import {
  createPost,
  getAllposts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPost);

router.get("/posts", getAllposts);
router.get("/post/:id", getPost);
router.post("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/filename", getImage);
export default router;
