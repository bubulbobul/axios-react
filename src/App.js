import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserForm from "./components/UserForm";

class App extends Component {
  state = {
    repos: null
  };

  getUser = e => {
    e.preventDefault();
    // console.log(user);
    const user = e.target.elements.username.value;
    const url = `https://api.github.com/users/${user}`;
    axios.get(url).then(res => {
      // console.log(res);
      const repos = res.data.public_repos;
      // console.log(repos);
      this.setState({
        repos
      });
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? (
          <p>Number of repose: {this.state.repos}</p>
        ) : (
          <p>Please enter a username</p>
        )}
      </div>
    );
  }
}

export default App;
