import React from 'react';

const userOutput = (props) => {
  const style = {
    width: '30%',
    height: '100px',
    border: '1px solid #000',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return <p style={style}>{props.value}</p>;
};

export default userOutput;
