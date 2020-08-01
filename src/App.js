import React from 'react';
import Book from './Book';
import Author from './Author';
import FeedBack from './FeedBack';
import UserInfo from './UserInfo';

import AuthContext from './AuthContext'

import book from './data/book.json';
import user from './data/user.json';

import './index.css'

class App extends React.Component {
    render() {
        return (
            <>
                <AuthContext.Provider value={user}>
                    <header style={styles.header}>
                        <div style={styles.logo}>Store</div>
                        <UserInfo />
                    </header>
                    <main>
                        <Book book={book} />
                        <Author author={book.authors} />
                        <FeedBack />
                    </main>
                    <footer style={styles.footer}>&copy; {new Date().getFullYear()}</footer>
                </AuthContext.Provider>
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
