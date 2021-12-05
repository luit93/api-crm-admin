import express from "express";
import { comparePassword } from "../helper/bcrypt.helper.js";
import { loginUserFormValidation } from "../middleware/formValidation.middleware.js";
import { getOneAdminUser } from "../models/user/User.model.js";
import { createAccessToken, createRefreshToken } from "../helper/jwt.helper.js";
const Router = express.Router();

Router.post("/", loginUserFormValidation, async (req, res, next) => {
  try {
    //hashing password
    const { email, password } = req.body;

    const user = await getOneAdminUser({ email: email }); //get user by email

    //check if passwords match --> create tokens and store in database
    if (user?._id) {
      const matched = comparePassword(password, user.password);
      if (matched) {
        //create tokens
        const accessJWT = await createAccessToken(user._id, user.email);
        const refreshJWT = await createRefreshToken(user._id, user.email);
        //return the tokens
        return res.json({ status: "success", accessJWT, refreshJWT });
      }
    }
    // req.body.password = hashPassword(password);
    // console.log(user);

    res.json({
      status: "Error",
      message: " Error! Invalid credentials",
    });
  } catch (error) {
    next(error);
  }
});

export default Router;
