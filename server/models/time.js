import mongoose from "mongoose"

const timeSchema = new mongoose.Schema({
    currentElapse: {
        type: Number,
        required: false,
        default: 0
    },

    totalElapse: {
        type: Number,
        required: false,
        default: 0
    },

    isRunning:{
        type: Boolean,
        required: false,
        default: false
    }
});

const Time = mongoose.model("Time", timeSchema, "times");

export default Time;