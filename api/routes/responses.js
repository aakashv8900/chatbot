const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /questions'
    });
});

router.post("/", (req, res, next) => {
    const response = {
        responseID: req.body.responseID,
        responseQues: req.body.responseQues,
        responseAns: req.body.responseAns
    };
    res.status(200).json({
        message: 'Handling POST requests to /questions',
        response: response
    });
});

router.get("/:responsesID", (req, res, next) => {
    res.status(200).json({
        message: "Got",
        responsesID: req.params.responsesID
    });
});

router.delete("/:responsesID", (req, res, next) => {
    res.status(200).json({
        message: "Deleted",
        responsesID: req.params.responsesID
    });
});

module.exports = router;