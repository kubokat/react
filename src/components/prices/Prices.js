import React from 'react';

const Prices = ({ children }) => (
  <div style={styles.priceBlock}>
    {children}
  </div>
);

export default Prices;

const styles = {
  priceBlock: {
    width: '33.33%',
    float: 'left',
    textAlign: 'center'
  }
}
