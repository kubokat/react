import React from 'react';
import SimilarBooksList from './SimilarBooksList'

class SimilarBooks extends React.Component {
  constructor(props) {
    super(props);

    this.removeBook = this.removeBook.bind(this);

    this.state = {
      books: props.books
    };
  }

  removeBook(bookId) {
    this.setState((state) => ({
      books: state.books.filter(item => item.id !== bookId)
    }));
  }

  render() {
    const books = this.state.books.slice(0, 3);
    return (
      <div style={styles.container}>
        {books.length ? <h3>Similar books</h3> : <p>is empty</p>}
        <SimilarBooksList books={books} removeBook={this.removeBook} />
      </div>
    )
  }

}

export default SimilarBooks;

const styles = {
  container: {
    textAlign: 'center'
  }
}
