import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "name too short"],
      required: [true, "name is required"],
    },
    password: {
      type: String,
      minLength: [3, "password too short"],
      required: [true, "name is required"],
    },
    email: {},
    age: {
      type: Number,
      min: [10, "verify your age"],
      max: [100, "verify your age"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const userModel = model("user", userSchema);
