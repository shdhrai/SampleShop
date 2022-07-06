import  './config.js';
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler, notFound } from './Middleware/Error.js';
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