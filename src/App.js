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

const API = {
    key: 'key3eShYFKG0oFCkD',
    path: 'https://api.airtable.com/v0/appgSrex1ZN9GqVfd/',
    mapFromAirTable: function (data) {
        return data.map(function (item) {
            let keys = Object.keys(item.fields);
            let obj = {};

            obj['id'] = item.id;

            keys.forEach(function (field) {
                obj[field] = item.fields[field];
            });

            return obj
        });
    },
    request: function (table, limit = 1, formula = null) {

        let params = {};
        let url = this.path + table;

        if (limit) {
            params['maxRecords'] = limit;
        }

        if (formula !== null && formula !== '') {
            params['filterByFormula'] = formula;
        }

        if (Object.keys(params).length) {
            params = new URLSearchParams(params).toString();
            url = `${url}?${params}`
        }

        return fetch(
            url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key
            }
        }
        ).then(response => response.json())
    }
};

class App extends React.Component {
    render() {
        return (
            <AuthContext.Provider value={user}>
                <header style={styles.header}>
                    <div style={styles.logo}>Store</div>
                    <UserInfo />
                </header>
                <main>
                    <Book book={book} api={API} />
                    <Author author={book.authors} />
                    <FeedBack />
                    <SimilarBooks books={books} api={API} />
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
