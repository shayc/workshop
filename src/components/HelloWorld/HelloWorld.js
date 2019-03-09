import React from 'react';

function HelloWorld(props) {
  return <p style={{ border: '1px solid red' }}>{props.message}</p>;
}

export default HelloWorld;
