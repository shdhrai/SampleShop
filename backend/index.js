import  './config.js';
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
<<<<<<< HEAD
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRouter.js";

=======
import { errorHandler, notFound } from './Middleware/Error.js';
>>>>>>> f0b11e403b1947dff7f0b6775a8bf3b9f5e09733
dotenv.config();

const app = express();
const port = process.env.PORT;

 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
//Giving different routes used 
app.use("/api/users", userRouter);



// ERROR HANDLER 
app.use(notFound);
app.use(errorHandler);


//Listening at 4000 ||1000 port
app.listen(port||1000, () => {
    console.log(`ShopForHome  listening at http://localhost:${port}`)
})