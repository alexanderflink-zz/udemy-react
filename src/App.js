import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    word: 'expialidocious'
  };

  changeWordHandler = (event) => {
    this.setState({
      word: event.target.value
    });
  };

  removeCharHandler = (event, i) => {
    let word = this.state.word.substring(i, 0) + this.state.word.substring(i + 1);
    this.setState({
      word: word
    });
  };

  render() {

    let chars = this.state.word.split('');

    return (
      <div className="App">
        <input onChange={this.changeWordHandler} value={this.state.word}></input>
        <ValidationComponent value={this.state.word}/>
        {chars.map((char, i) => {
          return <CharComponent value={char} key={i} clickHandler={(event) => this.removeCharHandler(event, i)}/>
        })}
      </div>
    );
  }
}

export default App;
