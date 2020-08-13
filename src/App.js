import React from 'react';
import Book from './components/book/Book';
import Author from './components/author/Author';
import FeedBack from './components/feedback/FeedBack';
import UserInfo from './components/users/UserInfo';

import AuthContext from './AuthContext'

import book from './data/book.json';
import books from './data/books.json';
import user from './data/user.json';

import './index.css'
import SimilarBooks from './components/similarBooks/SimilarBooks';

class App extends React.Component {
    render() {
        return (
                <AuthContext.Provider value={user}>
                    <header style={styles.header}>
                        <div style={styles.logo}>Store</div>
                        <UserInfo />
                    </header>
                    <main>
                        <Book book={book} />
                        <Author author={book.authors} />
                        <FeedBack />
                        <SimilarBooks books={books} />
                    </main>
                    <footer style={styles.footer}>&copy; {new Date().getFullYear()}</footer>
                </AuthContext.Provider>
        );
    }
}

export default App;

const styles = {
    header: {
        display: 'flex',
        color: 'white',
        backgroundColor: 'black',
        height: '50px',
        fontWeight: 'bold',
        alignItems: 'center'
    },

    logo: {
        marginLeft: '30px'
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
