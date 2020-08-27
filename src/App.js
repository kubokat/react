import React from 'react';
import Book from './components/book/Book';
import Author from './components/author/Author';
import FeedBack from './components/feedback/FeedBack';
import UserInfo from './components/users/UserInfo';

import AuthContext from './AuthContext'

import authors from './data/authors';
import user from './data/user';

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
                    <Book table="Book" limit="1" />
                    <Author author={authors} />
                    <FeedBack />
                    <SimilarBooks table="SameBooks" limit="6" />
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
