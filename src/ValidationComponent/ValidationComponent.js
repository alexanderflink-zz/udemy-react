import React from 'react';

const validationComponent = (props) => {

  let validation = "Too short!";
  if (props.value.length > 5) {
    validation = "OK!";
  }
  return <p>{validation}</p>;
};

export default validationComponent;
