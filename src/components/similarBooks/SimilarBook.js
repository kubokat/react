import React from 'react';

const SimilarBook = React.memo(({ book, removeBook }) => (
    <div key={book.id} className="w-full pb-3 md:w-1/3 md:p-2 text-center">
      <img className="w-full md:w-200" src={book.image} />
      <p className="text-xl">{book.title}</p>
      <button className="btn btn-blue" onClick={() => removeBook(book.id)}>x</button>
    </div>
));

export default SimilarBook;
