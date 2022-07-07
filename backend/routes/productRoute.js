import express from "express";
// import products from '../data/Products.js'
import expressAsyncHandler from "express-async-handler";
import Product from "../models/Product.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.send(products);
  })
);

// productRouter.post(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     // await Product.remove({})
//     const createProducts = await Product.insertMany(products);
//     res.send({ createProducts });
//   })
// );

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
