import express from 'express'
import mongoose from 'mongoose'
import router from './routes/timeRoutes.js'
import cors from 'cors'

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/Timer";

try {
    mongoose.connect(MONGO_URI);
    console.log("connected to mongoDB");
} catch (error) {
    console.error("failed connecting to mongoDB:", error);
}
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api/time", router);

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`);
})