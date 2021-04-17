import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Layout } from './components';
import Intro from './en/1-intro';

const App = () => (
    <Layout>
        <Header>azaza</Header>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Intro} />
            </Switch>
        </BrowserRouter>
    </Layout>
);

export default App;
