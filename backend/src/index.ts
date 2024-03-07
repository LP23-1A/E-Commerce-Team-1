import { connectDataBase } from "./utils/database";
import { order } from "./router/order";
import { product } from "./router/Product";
import { user } from "../src/router/user";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bp from "body-parser";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { user } from "../src/router/user";
import { product } from "./router/Product";
=======
import { Income } from "./router/income";
>>>>>>> 49815fb (income backend done)
>>>>>>> 1d9a58c (income backend done)

dotenv.config();

connectDataBase()
  .then(() => console.log("Database connected successfully."))
  .catch((error) => console.error("Database connection failed:", error));

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bp.json());
app.use(cors());
<<<<<<< HEAD
app.use('/user', user)
app.use("/product", product)
app.use('/order',order);
=======
app.use("/Income", Income);
>>>>>>> 49815fb (income backend done)

app.get("/", (_, res) => {
  res.status(200).send({
    success: true,
    message: "Successfully connected to the database.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
