const q1 = "What kind of vehicle you own?";
const q2 = "What kind of Two Wheeler you own?"
const q3 = "How often do you take your two wheeler for a service?"
const often = "That's great! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step"
const normally = "That's good! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step."
const rarely = "That's bad! You should always keep your vehicle's health in check. Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step."
const four = "Yo buddy! Remeber to do car pooling whenever possible to save our environment!"
const no = "That's awesome! You know car pooling is the new trend to save environment!"
// Two Wheeler		Four Wheeler		No Vehicle
// Scooter		Bike		Sport Bike (eg. Pulsar)
// Very Often (Every Month)		Normally (Every quarter)		Rarely (Once in 6 months)

exports.usersControllers = (req, res) => {
        res.json({
                quesList: [q1,q2,q3],
        })
}


// quesList: [q1,q2,q3],
// wheelerList: ["Two Wheeler", "Four Wheeler", "No Vehicle"],
// wheelerkindList: ["Scooter", "Bike", "Sport Bike (eg. Pulsar)"],
// servicetimeList: ["Very Often (Every Month)","Normally (Every quarter)","Rarely (Once in 6 months)"],
// serviceresList: [often, normally, rarely],
// otherwheelerList: [four, no],

// What kind of vehicle you own? [Q]
//          Two Wheeler [two]
//                  What kind of Two Wheeler you own? [Q1.1]
//                          Scooter [scooter]
//                                  How often do you take your two wheeler for a service? [Q1.1.1]
//                                          Very Often (Every Month) [often]
//                                                  That's great! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step [often1]
//                                          Normally (Every quarter) [normally]
//                                                  That's good! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step. [normally1]
//                                          Rarely (Once in 6 months) [rarely]
//                                                  That's bad! You should always keep your vehicle's health in check. Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step. [rarely1]
//                          Bike [bike]
//                                  How often do you take your two wheeler for a service? [Q1.1.1]
//                                          Very Often (Every Month) [often]
//                                                  That's great! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step [often1]
//                                          Normally (Every quarter) [normally]
//                                                  That's good! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step. [normally1]
//                                          Rarely (Once in 6 months) [rarely]
//                                                  That's bad! You should always keep your vehicle's health in check. Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step. [rarely1]
//                          Sport Bike (eg. Pulsar) [sport]
//                                  How often do you take your two wheeler for a service? [Q1.1.1]
//                                          Very Often (Every Month) [often]
//                                                  That's great! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step [often1]
//                                          Normally (Every quarter) [normally]
//                                                  That's good! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step. [normally1]
//                                          Rarely (Once in 6 months) [rarely]
//                                                  That's bad! You should always keep your vehicle's health in check. Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step. [rarely1]
//          Four Wheeler [four]
//                  Yo buddy! Remeber to do car pooling whenever possible to save our environment! [Q2.1]
//          No Vehicle [no]
//                  That's awesome! You know car pooling is the new trend to save environment! [Q3.1]