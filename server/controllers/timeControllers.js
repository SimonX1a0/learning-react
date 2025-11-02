import mongoose from "mongoose"

const timeSchema = new mongoose.Schema({
    currentElapse: {
        type: Number,
        required: false
    },

    totalElapse: {
        type: Number,
        required: false
    }
});

const Time = mongoose.model("Time", timeSchema);

export default Time;