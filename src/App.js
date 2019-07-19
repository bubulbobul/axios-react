import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user);
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
