const express = require("express");
const router = express.Router();
const usersRoute = require("../controller/usersControllers")

router.get("/", usersRoute.usersControllers);

module.exports = router;





// const q1 = "What kind of vehicle you own?";
// const q2 = "What kind of Two Wheeler you own?"
// const q3 = "How often do you take your two wheeler for a service?"
// const often = "That's great! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step"
// const normally = "That's good! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step."
// const rarely = "That's bad! You should always keep your vehicle's health in check. Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step."
// const four = "Yo buddy! Remeber to do car pooling whenever possible to save our environment!"
// const no = "That's awesome! You know car pooling is the new trend to save environment!"

// function check(answer){
//     if(answer === "Two Wheeler"){
//         printques(q2)
//     }
//     if(answer === "Four Wheeler"){
//         console.log(four)
//     }
//     if(answer === "No Vehicle"){
//         console.log(no)
//     }
//     if(answer === "Scooter"){
//             printques(q3)
//     }
//     if(answer === "Bike"){
//         printques(q3)
//     }
//     if(answer === "Sport Bike (eg. Pulsar)"){
//         printques(q3)
//     }
//     if(answer === "Very Often (Every Month)"){
//         printques(often)
//     }
//     if(answer === "Normally (Every quarter)"){
//         printques(normally)
//     }
//     if(answer === "Rarely (Once in 6 months)"){
//         printques(rarely)
//     }
// };

// function printques(ques){
//     console.log(ques);
// };


// var ans = "Very Often (Every Month)"
// check(ans)