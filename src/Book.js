import React from 'react';

class Book extends React.Component {
  render() {

    const book = this.props.book;

    return (
      <div>
        <div style={styles.description}>
          <h1>{book.title}</h1>
          <div>{book.description}</div>
          <div>{book.pages} Pages</div>
        </div>
        <div style={styles.imageBlock}>
          <img style={styles.image} src={book.image} />
        </div>
        <div style={styles.priceBlock}>
          <div>Minimum price {book.minimumPrice}$</div>
          <div>Suggested price {book.suggestedPrice}$</div>
        </div>
      </div>
    )
  }
}

export default Book;

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
  },

  image: {
    maxWidth: '100%'
  }
}
