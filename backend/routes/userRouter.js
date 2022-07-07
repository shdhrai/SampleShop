import express from "express";
import User from "../Models/UserModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import { generateToken, isAuth } from "../utils.js";
import users from "../data/users.js";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import {fetchuser} from '../Middleware/fetchuser.js'

const JWT_SECRET="shopforhomebyajandshashi";

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

userRouter.get(
  "/profile",
  fetchuser,
  expressAsyncHandler(async (req, res) => {
    let userId=req.user.id;
    res.send(userId);
  })
);

//Creating route to register a user
userRouter.post(
  "/register",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
)

userRouter.get("/getuser", fetchuser, async (req, res) => {
  try {
     const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");
  }
});

userRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createUsers = await User.insertMany(users);
    res.send({ createUsers });
  })
);

export default userRouter;
