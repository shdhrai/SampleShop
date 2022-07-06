import mongoose from "mongoose";
const dotenv=require('dotenv');
dotenv.config();
const mongoURI=process.env.mongoURI;
const connectToMongo = async() => {
    await mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;
//connecting to the database using mongoose