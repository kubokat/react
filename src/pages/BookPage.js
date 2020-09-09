import React from 'react';
import Book from '../components/book/Book';
import Author from '../components/author/Author';
import FeedBack from '../components/feedback/FeedBack';
import SimilarBooks from '../components/similarBooks/SimilarBooks';

import authors from '../data/authors';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bookId = this.props.match.params.id;

    return (
      <>
        <Book bookId={bookId} />
        <Author author={authors} />
        <FeedBack />
        <SimilarBooks limit="6" />
      </>
    )
  }
}

export default BookPage;
