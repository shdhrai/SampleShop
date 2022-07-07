import express from "express";
import User from "../models/UserModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils.js";
import users from "../data/users.js";

const userRouter = express.Router();

userRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
          createdAt: user.createdAt,
        });
        return;
      }
    }
    res.status(401).send({ message: "invald email or password api called" });
  })
);

userRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createUsers = await User.insertMany(users);
    res.send({ createUsers });
  })
);

export default userRouter;
