import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Header, Layout } from './components';
import EN from './en';

const App = () => (
    <Layout>
        <Header>azaza</Header>
        <BrowserRouter>
            <Switch>
                <EN />
            </Switch>
        </BrowserRouter>
    </Layout>
);

export default App;
