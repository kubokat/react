import React from 'react';

const Button = (props) => {
  const { label } = props;

  return (
    <button onClick={props.onClick} className="btn btn-blue my-5">{label}</button>
  );
};

export default Button;