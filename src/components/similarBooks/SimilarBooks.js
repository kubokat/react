import React from 'react';
import SimilarBooksList from './SimilarBooksList'
import withLoader from '../../HOC/withLoader'
import getBooks from '../../HOC/getBooks'

class SimilarBooks extends React.Component {
  constructor(props) {
    super(props);

    this.removeBook = this.removeBook.bind(this);

    this.state = {
      removedIds: []
    };
  }

  removeBook(bookId) {
    this.setState((state) => ({
      removedIds: [...state.removedIds, bookId]
    }));
  }

  render() {
    const { removedIds } = this.state;

    const books = this.props.books
      .filter(function (book) {
        if (!removedIds.includes(book.id)) {
          return book;
        }
      })
      .slice(0, 3);
    return (
      <div style={styles.container}>
        {books.length ? <h3>Similar books</h3> : <p>is empty</p>}
        <SimilarBooksList books={books} removeBook={this.removeBook} />
      </div>
    )
  }

}

export default getBooks(withLoader(SimilarBooks));

const styles = {
  container: {
    textAlign: 'center'
  }
}
