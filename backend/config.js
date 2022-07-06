import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const mongoURI=process.env.mongoURL;
const connectToMongo = async() => {
    await mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
connectToMongo();
//connecting to the database using mongoose