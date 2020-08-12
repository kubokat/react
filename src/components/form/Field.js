import React from 'react';

const Field = (props) => {
  const { label, name, change, InputType } = props;

  return (
    <p>
      <label>{label}</label>
      <InputType style={styles.input} name={name} onChange={change} />
    </p>
  );
};

export default Field;

const styles = {
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginTop: '6px',
    marginBottom: '16px',
    resize: 'vertical'
  }
}
