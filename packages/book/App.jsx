import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Layout } from './components';
import Home from './Home';
import EN from './en';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Header>Breadcrumbs</Header>
            <Switch>
                <Route path='/' exact component={Home} />
                <EN />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
