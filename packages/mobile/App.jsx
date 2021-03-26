import React, { useCallback, useState } from 'react';
import { useAPI } from './tools';
import { Layout } from './components';
import { Router, Screen } from './router';
import { CacheProvider } from './tools/cache';
import Feed from './screens/feed';
import Followers from './screens/followers';
import Likes from './screens/likes';
import LogIn from './screens/auth/LogIn';
import Posts from './screens/posts';
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
        <CacheProvider>
            <Layout onReset={handleReset}>
                <Router key={key} initialScreen={initialScreen} initialTab='home'>
                    <Screen name='login' component={LogIn} tabs={false} />
                    <Screen name='signup' component={SignUp} tabs={false} />
                    <Screen name='feed' component={Feed} />
                    <Screen name='search' component={Search} />
                    <Screen name='profile' component={Profile} />
                    <Screen name='profile-edit' component={ProfileEdit} view='modal' />
                    <Screen name='followers' component={Followers} />
                    <Screen name='likes' component={Likes} />
                    <Screen name='posts' component={Posts} />
                </Router>
            </Layout>
        </CacheProvider>
    );
};

export default App;
