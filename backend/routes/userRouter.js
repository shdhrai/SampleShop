import express from "express";
import User from "../Models/UserModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import users from "../data/users.js";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { fetchuser } from "../Middleware/fetchuser.js";
import { fetchadmin } from "../Middleware/fetchadmin.js";

const JWT_SECRET = "shopforhomebyajandshashi";

const userRouter = express.Router();

//login a user

//creating route to login a user
userRouter.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let success = false;
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      if (token) {
        success = true;
      }

      res.json({ 
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token:token,
        createdAt: user.createdAt,
       });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
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
      const token = jwt.sign(data, JWT_SECRET);

      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

//getting a user's details by user himself
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

// getting all users for admin only
userRouter.get("/getallusers", fetchadmin, async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.send(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");
  }
});

// seeding users through .js file
userRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createUsers = await User.insertMany(users);
    res.send({ createUsers });
  })
);

export default userRouter;
