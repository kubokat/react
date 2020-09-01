import React from 'react';
import Button from '../form/Button'

const SimilarBook = React.memo(({ book, removeBook }) => (
    <div key={book.id} className="w-full pb-3 md:w-1/3 md:p-2 text-center">
      <img className="w-full md:w-200" src={book.image} />
      <p className="text-xl">{book.title}</p>
      <Button onClick={() => removeBook(book.id)} label="x" />
    </div>
));

export default SimilarBook;
