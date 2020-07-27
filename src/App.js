import React from 'react';
import Book from './Book';
import Author from './Author';

class App extends React.Component {
    render() {
        return (
            <div>
                <Book book={this.props.book} />
                <Author author={this.props.book.authors} />
            </div>
        );
    }
}

export default App;
