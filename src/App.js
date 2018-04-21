import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'alexanderflink'
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changeHandler={this.changeUsernameHandler.bind(this)} value={this.state.username}/>
        <UserOutput value={this.state.username}/>
        <UserOutput value={this.state.username}/>
      </div>
    );
  }
}

export default App;
