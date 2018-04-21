import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return <p onClick={props.clickHandler} className="CharComponent">{props.value}</p>;
};

export default charComponent;
