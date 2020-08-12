import React from 'react';

const ImageBlock = ({ image }) => (
  <div style={styles.imageBlock}>
    <img style={styles.image} src={image} />
  </div>
);

export default ImageBlock;

const styles = {
  image: {
    maxWidth: '100%'
  },

  imageBlock: {
    width: '33.33%',
    float: 'left'
  }
}
