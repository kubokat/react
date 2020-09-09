import React from 'react';
import Button from '../form/Button'
import { Link } from 'react-router-dom';
import { bookPath } from '../../helpers/routes'

const SimilarBook = React.memo(({ book, removeBook }) => (

  <div key={book.id} className="w-full pb-3 md:w-1/3 md:p-2 text-center">
    <Link to={`/book/${book.id}`}>
      <img className="w-full md:w-200" src={book.image} />
    </Link>

    <Link to={bookPath(book.id)}>
      <p className="text-xl">{book.title}</p>
    </Link>
    {removeBook ? <Button onClick={() => removeBook(book.id)} label="x" /> : ''}
  </div>
));

export default SimilarBook;
