import React, { useCallback, useMemo, useState } from 'react';
import { useAPI } from './tools';
import { Layout } from './components';
import { Router, Screen } from './router';
import { CacheProvider } from './tools/cache';
import { app } from './tools/app';
import Feed from './screens/feed';
import Followers from './screens/followers';
import Likes from './screens/likes';
import Likers from './screens/likers';
import LogIn from './screens/auth/LogIn';
import Posts from './screens/posts';
import Profile from './screens/profile';
import ProfileEdit from './screens/profile-edit';
import Saved from './screens/saved';
import Search from './screens/search';
import SignUp from './screens/auth/SignUp';

const App = () => {
    const fetch = useAPI(),
        [key, setKey] = useState(0),
        initialScreen = localStorage.getItem('auth_token') ? 'feed' : 'login';

    const context = useMemo(
        () => ({
            reset: () => {
                fetch('/users/forget.json', { method: 'POST' });
                localStorage.removeItem('auth_token');
                localStorage.removeItem('userid');
                setKey(Math.random());
            }
        }),
        []
    );

    const handleReset = useCallback(() => {
        if (window.confirm('Are you sure you want to log out?')) context.reset();
    }, []);

    return (
        <app.Provider value={context}>
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
                        <Screen name='likers' component={Likers} />
                        <Screen name='posts' component={Posts} />
                        <Screen name='saved' component={Saved} />
                        <Screen name='likes' component={Likes} />
                    </Router>
                </Layout>
            </CacheProvider>
        </app.Provider>
    );
};

export default App;
