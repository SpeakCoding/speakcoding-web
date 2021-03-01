import React from 'react';
import Layout from './components/layout';
import { Router, Screen } from './router';
import LogIn from './screens/auth/LogIn';
import SignUp from './screens/auth/SignUp';

const App = () => {
    const initialScreen = localStorage.getItem('auth_token') ? 'feed' : 'login';

    return (
        <Layout>
            <Router initialScreen={initialScreen}>
                <Screen name='login'>
                    <LogIn />
                </Screen>
                <Screen name='signup'>
                    <SignUp />
                </Screen>
            </Router>
        </Layout>
    );
};

export default App;
