import React from 'react';

const SimilarBook = React.memo(({ book, removeBook }) => (
    console.log('render ' + book.id) ||
    <div key={book.id} style={styles.book}>
      <img width="200px" src={book.image} />
      <p>{book.title}</p>
      <button onClick={() => removeBook(book.id)}>x</button>
    </div>
));

export default SimilarBook;

const styles = {
  book: {
    float: 'left',
    width: '33.33%',
  }
}