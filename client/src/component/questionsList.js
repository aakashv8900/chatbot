import React from 'react';
import {useEffect,useState} from "react";
import axios from 'axios';
function QuestionsList() {
    const [questions,setQuestions]=useState([]);
    const [index,setIndex] = useState(0)
    useEffect(()=>{
        axios.get(`http://localhost:5000/questions/`)
        .then(res => {
           setQuestions(res.data)
        });
    },[])
    function fin (e){
        e.preventDefault()
        if(questions[0] && index<questions.length) {
            setIndex(index+1)
        }
        const responseQues = questions[index].quesname;
        const responseAns = e.target.innerText;
        axios.post(`http://localhost:5000/responses/`, {
            responseQues,
            responseAns
        })
        .then(response => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    if(!questions[0]) return <div></div>
    return ( <div className="wrapper">
    <form className="form-signin"> {     index===questions.length?<h1 className ="form-signin-heading">Thank you for submitting</h1>:
    <>
        <h1 className="form-signin-heading">Hoppy.in</h1>
        <h2>{questions[index].quesname}</h2>
        <button onClick={(e) => {fin(e)}}>{questions[index].res1}</button>
        <button onClick={(e) => {fin(e)}}>{questions[index].res2}</button>
        <button onClick={(e) => {fin(e)}}>{questions[index].res3}</button>
        </>
    }
    </form>
</div> );
}

export default QuestionsList;

// export default function QuestionsList()  {
//     state = {
//         questions: [],
//         currentquestion: {},
//         index: 0
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:5000/questions/`)
//         .then(res => {
//             this.setState({ questions: res.data, currentquestion: res.data[0], index: 0 });
//         });
//     }

//     fin() {
        
//         this.state.index = this.state.index + 1;
//     }

//     render() {
//         if (!this.state.questions[0]) {
//             return <div>

//             </div>
//         } 
//         if (this.state.index >= this.state.questions.length) {
//             return <div className="thanks">
//                 Thank You for your responses!
//             </div>
//         }
//         return (
//         <div className="wrapper">
//             <form className="form-signin">       
//                 <h1 className="form-signin-heading">Hoppy.in</h1>
//                 <h2>{this.state.questions[this.state.index].quesname}</h2>
//                 <button onClick={() => {this.fin()}}>{this.state.questions[this.state.index].res1}</button>
//                 <button onclick="fin()">{this.state.questions[this.state.index].res2}</button>
//                 <button onclick="fin()">{this.state.questions[this.state.index].res3}</button>
//             </form>
//         </div>
//         }
//     }
// }