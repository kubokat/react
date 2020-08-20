import React from 'react';
import SimilarBooksList from './SimilarBooksList'

class SimilarBooks extends React.Component {
  constructor(props) {
    super(props);

    this.removeBook = this.removeBook.bind(this);

    this.state = {
      books: null,
      removedIds: []
    };
  }

  removeBook(bookId) {
    this.setState((state) => ({
      removedIds: [...state.removedIds, bookId]
    }));
  }

  componentDidMount() {
    this._getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.removedIds !== this.state.removedIds) {
      this._getData();
    }
  }

  _getData() {

    let ids = '';

    if (this.state.removedIds.length) {
      ids = `SEARCH(RECORD_ID(), "${this.state.removedIds.join(',')}") = ""`
    }

    this.props.api.request('SameBooks', 3, ids)
      .then(json => this._setData(json));
  }

  _setData(data) {
    this.setState({ books: this.props.api.mapFromAirTable(data.records) })
  }

  render() {

    if (this.state.books !== null) {
      const books = this.state.books.slice(0, 3);
      return (
        <div style={styles.container}>
          {books.length ? <h3>Similar books</h3> : <p>is empty</p>}
          <SimilarBooksList books={books} removeBook={this.removeBook} />
        </div>
      )
    } else {
      return (
        <div style={styles.container}>
          Loading ...
        </div>
      )
    }


  }

}

export default SimilarBooks;

const styles = {
  container: {
    textAlign: 'center'
  }
}
