import mongoose from "mongoose";

const Connection = async () => {
  try {
    const url =
      "mongodb://muchewad:codeformuchewad@blogweb-shard-00-00.7akcb.mongodb.net:27017,blogweb-shard-00-01.7akcb.mongodb.net:27017,blogweb-shard-00-02.7akcb.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-gv1ex5-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected succesffully");
  } catch (error) {
    console.log("Error while connecting to mongodb", error);
  }
};

export default Connection;
