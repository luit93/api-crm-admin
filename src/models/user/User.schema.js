// import { date } from "joi";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema(
  {
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    fName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    lName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    isEmailConfirmed: {
      type: Boolean,
      required: true,
      default: true,
    },
    email: {
      type: String,
      required: true,
      maxLength: 100,
      indexes: 1,
      unique: true,
    },
    phone: {
      type: String,
      maxLength: 15,
    },
    password: {
      type: String,
      required: true,
      maxLength: 500,
    },
    role: {
      type: String,
      required: true,
      maxLength: 30,
      default: "developer", // admin, developer, customerService
    },
    refreshJWT: {
      addedAt: {
        type: Date,
        default: Date.now(),
      },
      token: {
        type: String,
        maxLength: 500,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admin_user", AdminUserSchema);
