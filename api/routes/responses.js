const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Response = require("../models/response");
const Question = require("../models/question");

router.get("/", (req, res, next) => {
    Response.find().select('responseQues responseAns').populate('question', 'quesname').exec().then(docs => {
        res.status(200).json({
            count: docs.length,
            response: docs.map(doc => {
                return {
                    _id: doc._id,
                    responseQues: doc.responseQues,
                    responseAns: doc.responseAns
                }
            })
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.post("/", (req, res, next) => {
    Question.findById(req.body.questionsID).then(question => {
        if (!question) {
            return res.status(404).json({
                message: "Response Not Found"
            });
        }
        const response = new Response({
        _id: mongoose.Types.ObjectId(),
        responseQues: req.body.responseAns,
        responseAns: req.body.responseAns
    });
    return response.save()
    })
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Response Stored!',
            createdResponse: {
                _id: result._id,
                responseQues: result.responseQues,
                responseAns: result.responseAns
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get("/:responsesID", (req, res, next) => {
    Question.findById(req.params.responsesID).populate('question').exec().then(response => {
        if (!response) {
            return res.status(404).json({
                message: "Response Not Found"
            });
        }
        res.status(200).json({
            response: response
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.delete("/:responsesID", (req, res, next) => {
    Response.remove({ _id: req.params.responsesID }).exec().then(result => {
        res.status(200).json({
            message: 'Response Deleted',
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;