import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import AuthContext from './AuthContext'

import user from './data/user';

import './index.css'
import Layout from './components/shared/layout';

import MainPage from './pages/MainPage'
import BookPage from './pages/BookPage';
import NotFound from './pages/NotFound'

import { bookPath } from './helpers/routes'

class App extends React.Component {
    render() {
        return (
            <AuthContext.Provider value={user}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route component={MainPage} path="/" exact />
                            <Route component={BookPage} path={bookPath()} strict exact />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </AuthContext.Provider>
        );
    }
}

export default App;
