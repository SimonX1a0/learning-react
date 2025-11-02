import express from 'express'
import mongoose from 'mongoose'

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/myDatabase";

try {
    mongoose.connect(MONGO_URI);
    console.log("connected to mongoDB");
} catch (error) {
    console.error("failed connecting to mongoDB:", error);
}


app.get("/", (req, res)=>{

});

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`);
})