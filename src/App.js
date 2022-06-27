import React, { useState } from 'react';

import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  //useState is empty here because the list is empty
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    //always want to pass a function to setUsersList because we want to grab the previous state to update
    setUsersList((prevUserList) =>{
      //returning an array because thats what we want and is our state. An array of users
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
