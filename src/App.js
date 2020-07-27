import React from 'react';
import Book from './Book';
import Author from './Author';

import book from './book.json';

import './index.css'

class App extends React.Component {
    render() {
        return (
            <>
                <header style={styles.header}>
                    Store
                </header>
                <main style={styles.main}>
                    <Book book={book} />
                    <Author author={book.authors} />
                </main>
                <footer style={styles.footer}>&copy; {new Date().getFullYear()}</footer>

            </>
        );
    }
}

export default App;

const styles = {
    header: {
        display: 'flex',
        color: 'white',
        backgroundColor: 'black',
        justifyContent: 'center',
        height: '50px',
        fontWeight: 'bold',
        alignItems: 'center'
    },

    main: {
        padding: '10px 10%',
        float: 'left'
    },

    footer: {
        marginTop: '50px',
        padding: '10px',
        float: 'left'
    }

}
