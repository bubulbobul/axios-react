import React from "react";
import axios from "axios";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const getUser = e => {
    e.preventDefault();
    // console.log(user);
    const user = e.target.elements.username.value;
    const url = `https://api.github.com/users/${user}`;
    axios.get(url).then(res => {
      console.log(res);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>HTTP Calls in React</h1>
      </header>
      <UserForm getUser={getUser} />
    </div>
  );
}

export default App;
