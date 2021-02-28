import React from 'react';
import Layout from './components/layout';
import { Router, Screen } from './router';
import Login from './screens/login';

const App = () => {
    const initialScreen = localStorage.getItem('auth_token') ? 'feed' : 'login';

    return (
        <Layout>
            <Router initialScreen={initialScreen}>
                <Screen name='login'>
                    <Login />
                </Screen>
            </Router>
        </Layout>
    );
};

export default App;
