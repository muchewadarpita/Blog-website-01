import mongoose from "mongoose";
import grid from "gridfs-stream";

const url = "http://localhost:8000";
let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadImage = (request, response) => {
  try {
    if (request.file) {
      return response.status(404).json("File not found");
    }
    const imageURL = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageURL);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = await gfs.createReadStream(file.filename);
    readStream.pipe(response);
  } catch (error) {
    console.log(error);
    response.status(500).json("Failed to fetch the image", error);
  }
};
