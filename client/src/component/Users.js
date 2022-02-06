import React, {useState, useEffect} from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/ques").then(function(response) {
          setUsers(response.data)
        })
      }, [])

    return (<div>
        {users.map(user => <li>{user}</li>)}
    </div>)
}

export default Users;