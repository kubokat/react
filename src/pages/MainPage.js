import React from 'react';
import withLoader from '../HOC/withLoader'
import getBooks from '../HOC/getBooks'
import SimilarBook from '../components/similarBooks/SimilarBook'
import { Helmet } from 'react-helmet';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const books = this.props.books;
    const booksItems = books.map(book => (
      <SimilarBook key={book.id} book={book} />
    ));

    return (
      <>
        <Helmet>
          <title>Main page</title>
        </Helmet>
        <div className="flex flex-wrap">{booksItems}</div>
      </>
    );

  }
}

export default getBooks(withLoader(MainPage));
