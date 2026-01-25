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

export const Notice = mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);