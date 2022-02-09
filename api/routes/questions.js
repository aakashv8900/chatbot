const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Question = require("../models/question");
const checkAuth = require("../middleware/check-auth");

router.get("/", (req, res, next) => {
    Question.find().select('quesname res1 res2 res3 _id').exec().then(docs => {

        res.status(200).json(docs);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});

router.post("/", checkAuth, (req, res, next) => {
    const question = new Question({
        _id:new mongoose.Types.ObjectId(),
        quesname: req.body.quesname,
        res1: req.body.res1,
        res2: req.body.res2,
        res3: req.body.res3
    });
    question.save().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Question Created!',
            createdQuestion: result
    });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get("/:questionsID", (req, res, next) => {
    const id = req.params.questionsID;
    Question.findById(id).select('quesname res1 res2 res3 _id').exec().then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json({
                question: doc
            });
        } else {
            res.status(400).json({message: "No Valid Entry Found"});
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch("/:questionsID", checkAuth, (req, res, next) => {
    const id = req.params.questionsID;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Question.update({_id: id}, { $set: updateOps }).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete("/:questionsID", checkAuth, (req, res, next) => {
    const id = req.params.questionsID;
    Question.remove({_id: id}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;