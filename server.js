import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const PORT = process.env.PORT || 8000;
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for sending form data or mixed data type
app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server is ready at http://localhost:${PORT}`);
});

app.use("/", (req, res, next) => {
  res.send("ok");
});
