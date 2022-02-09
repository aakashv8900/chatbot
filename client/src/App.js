import './App.css';
import React, {useEffect, useState, Component} from 'react';
import axios from 'axios'
import QuestionsList from './component/questionsList'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <body>
          <QuestionsList />
        </body>
      </div>
    );
  }
};

export default App;
