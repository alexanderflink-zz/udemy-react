import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return <input className="UserInput" onChange={props.changeHandler} value={props.value}></input>;
};

export default userInput;
