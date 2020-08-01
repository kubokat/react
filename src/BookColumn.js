import React from 'react';
import ReactDom from 'react-dom';

const BookColumn = ({ children, name }) => (
  <div style={styles[name]}>
    {children}
  </div>
);

export default BookColumn;

const styles = {
  description: {
    width: '33.33%',
    float: 'left'
  },

  priceBlock: {
    width: '33.33%',
    float: 'left',
    textAlign: 'center'
  },

  imageBlock: {
    width: '33.33%',
    float: 'left'
  }
}
