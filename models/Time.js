const mongoose = require("mongoose");

const timeSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    deadline: {
        type: Date,
        required: true,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Time", timeSchema, 'time');