import React, { useCallback, useState } from 'react';
import Layout from './components/layout';
import { Router, Screen } from './router';
import Feed from './screens/feed';
import LogIn from './screens/auth/LogIn';
import ProfileEdit from './screens/profile-edit';
import SignUp from './screens/auth/SignUp';

const App = () => {
    const [initialScreen, update] = useState(localStorage.getItem('auth_token') ? 'feed' : 'login'),
        reset = useCallback(() => update('login'), []);

    return (
        <Layout key={initialScreen} reset={reset}>
            <Router initialScreen={initialScreen}>
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
