import ReactDom from 'react-dom';
import React from 'react';

import App from './App';

const book = {
    title: 'The Hundred-Page Machine Learning Book',
    description: 'Everything you really need to know in Machine Learning in a hundred pages.',
    pages: 100,
    language: 'en',
    progress: 20,
    image: 'https://d2sofvawe08yqg.cloudfront.net/theMLbook/hero2x?1549509109',
    authors: [
        { id: 1, name: 'Andriy Burkov', email: 'some@mail.com', avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1475540/original/andriy.jpg?1546120595' },
        { id: 2, name: 'Andriy Burkov', email: 'some@mail.com', avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1475540/original/andriy.jpg?1546120595' }
    ],
    minimumPrice: 20,
    suggestedPrice: 40,
    amountPrice: 2000,
    expectedPrice: 10000

}

ReactDom.render(
    <App book={book} />,
    document.getElementById('root')
);
