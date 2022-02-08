const mongoose = require("mongoose");

const responseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    responseQues: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    responseAns: { type: String, required: true }
});

module.exports = mongoose.model('Response', responseSchema);