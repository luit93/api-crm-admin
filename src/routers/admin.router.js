import express from "express";
import { hashPassword } from "../helper/bcrypt.helper.js";
import { newAdminUserFormValidation } from "../middleware/formValidation.middleware.js";
import { createAdminUser } from "../models/user/User.model.js";
const Router = express.Router();

//create an admin user
Router.get("/", (req, res) => {
  res.send("from admin router get method");
});
Router.post("/", newAdminUserFormValidation, async (req, res, next) => {
  try {
    //hashing password
    const { password } = req.body;
    req.body.password = hashPassword(password);
    const user = await createAdminUser(req.body);
    console.log(user);
    user._id
      ? res.json({
          status: "success",
          message: "Admin user create sucessfully",
        })
      : res.json({
          status: "Error",
          message: " Error! Unable to create user account",
        });
  } catch (error) {
    if (error.message.includes("duplicate key error collection")) {
      error.status = 200;
      error.message = "Email already exists";
    }
    next(error);
  }
});

Router.patch("/", (req, res) => {}); //update 1 field
Router.put("/", (req, res) => {}); //update whole user
Router.delete("/", (req, res) => {});

export default Router;
