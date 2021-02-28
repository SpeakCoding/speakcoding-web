import React from 'react';
import Layout from './components/layout';
import { Router, Screen } from './router';
import Home from './screens/home';
import Login from './screens/login';

const App = () => (
    <Layout>
        <Router initialScreen='home'>
            <Screen name='home'>
                <Home />
            </Screen>
            <Screen name='login'>
                <Login />
            </Screen>
        </Router>
    </Layout>
);

export default App;
