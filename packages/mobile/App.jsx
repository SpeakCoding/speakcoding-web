import React, { useCallback, useState } from 'react';
import { useAPI } from './tools';
import Layout from './components/layout';
import { Router, Screen } from './router';
import Feed from './screens/feed';
import LogIn from './screens/auth/LogIn';
import Profile from './screens/profile';
import ProfileEdit from './screens/profile-edit';
import Search from './screens/search';
import SignUp from './screens/auth/SignUp';

const App = () => {
    const fetch = useAPI(),
        [key, setKey] = useState(0),
        initialScreen = localStorage.getItem('auth_token') ? 'feed' : 'login';

    const handleReset = useCallback(() => {
        if (!window.confirm('Are you sure you want to log out?')) return;

        fetch('/users/forget.json', { method: 'POST' });
        localStorage.removeItem('auth_token');
        localStorage.removeItem('userid');
        setKey(Math.random());
    }, []);

    return (
        <Layout onReset={handleReset}>
            <Router key={key} initialScreen={initialScreen} initialTab='home'>
                <Screen name='login' component={LogIn} />
                <Screen name='signup' component={SignUp} />
                <Screen name='feed' component={Feed} />
                <Screen name='search' component={Search} />
                <Screen name='profile' component={Profile} />
                <Screen name='profile-edit' component={ProfileEdit} view='modal' />
            </Router>
        </Layout>
    );
};

export default App;
