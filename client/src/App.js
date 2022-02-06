import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:5000/ques").then(function(response) {
        setUsers(response.data)
      })
    }, [])


  return (
    <div>
      {users.map(user => <li>{user}</li>)}
    </div>)
}

export default App;
