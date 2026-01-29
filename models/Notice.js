import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Agar model pehle se bana hai to wahi use karo, nahi to naya banao
const Notice = mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);

export default Notice;