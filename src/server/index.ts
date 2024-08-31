import express from "express";
//import http from "http";
import cors from "cors";
import { CardModel } from "./model/CardModel";
import router from "./route/cardRoute";
import fileUpload from "express-fileupload";
import path from "path";
import sequelize from "./db";


const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

//const server = http.createServer(app);
//server.listen(PORT, () => console.log(`server started on port ${PORT}`));

const start = async () => {
  try {
    //await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();