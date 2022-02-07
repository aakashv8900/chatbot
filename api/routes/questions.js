const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /questions'
    });
});

router.post("/", (req, res, next) => {
    const question = {
        quesname: req.body.quesname,
        res1: req.body.res1,
        res2: req.body.res2,
        res3: req.body.res3
    };
    res.status(200).json({
        message: 'Handling POST requests to /questions',
        createdQuestion: question
    });
});

router.get("/:questionsID", (req, res, next) => {
    const id = req.params.questionsID;
    if (id === 'special') {
        res.status(200).json({
            message: "You Discovered",
            id: id
        });
    } else {
        res.status(200).json({
            message: "Congo"
        });
    }
});

router.patch("/:questionsID", (req, res, next) => {
    res.status(200).json({
        message: "Updated"
    });
});

router.delete("/:questionsID", (req, res, next) => {
    res.status(200).json({
        message: "Deleted"
    });
});

module.exports = router;