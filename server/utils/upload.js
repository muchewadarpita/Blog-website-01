import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
import { request } from "express";

const storage = new GridFsStorage({
  url: "mongodb://muchewad:codeformuchewad@blogweb-shard-00-00.7akcb.mongodb.net:27017,blogweb-shard-00-01.7akcb.mongodb.net:27017,blogweb-shard-00-02.7akcb.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-gv1ex5-shard-0&authSource=admin&retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
