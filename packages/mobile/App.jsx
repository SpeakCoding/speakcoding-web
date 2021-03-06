import React, { useCallback, useState } from 'react';
import { useAPI } from './tools';
import Layout from './components/layout';
import { Router, Screen } from './router';
import Feed from './screens/feed';
import LogIn from './screens/auth/LogIn';
import ProfileEdit from './screens/profile-edit';
import SignUp from './screens/auth/SignUp';

const App = () => {
    const fetch = useAPI(),
        [key, setKey] = useState(0),
        initialScreen = localStorage.getItem('auth_token') ? 'feed' : 'login';

    const handleReset = useCallback(() => {
        if (!window.confirm('Are you sure you want to log out?')) return;

        fetch('/users/forget.json', { method: 'POST' });
        localStorage.removeItem('auth_token');
        setKey(Math.random());
    }, []);

    return (
        <Layout onReset={handleReset}>
            <Router key={key} initialScreen={initialScreen}>
                <Screen name='login'>
                    <LogIn />
                </Screen>
                <Screen name='signup'>
                    <SignUp />
                </Screen>
                <Screen name='feed'>
                    <Feed />
                </Screen>
                <Screen name='profile-edit'>
                    <ProfileEdit />
                </Screen>
            </Router>
        </Layout>
    );
};

export default App;
