const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quesname: { type: String, required: true },
    res1: { type: String, required: true },
    res2: { type: String, required: true },
    res3: { type: String, required: true }
});

module.exports = mongoose.model('Question', questionSchema);