import React from 'react';

const Description = ({ children }) => (
  <div style={styles.description}>
    {children}
  </div>
);

export default Description;

const styles = {
  description: {
    width: '33.33%',
    float: 'left'
  }
}
