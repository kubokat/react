import React from 'react';
import SimilarBook from './SimilarBook';

const SimilarBooksList = ({ books, removeBook }) => (
  books.map(book => (
    <SimilarBook key={book.id} book={book} removeBook={removeBook} />
  ))
);

export default SimilarBooksList;
