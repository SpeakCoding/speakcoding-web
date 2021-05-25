import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { emit, listen } from '@sc/tools/phone-event';
import { useAPI } from './tools';
import { Layout } from './components';
import { Router, Screen } from './router';
import { CacheProvider } from './tools/cache';
import { app } from './tools/app';

// Screens
import Camera from './screens/post-create/Camera';
import Comments from './screens/comments';
import Feed from './screens/feed';
import Followers from './screens/followers';
import ImagePreview from './screens/post-create/ImagePreview';
import Likes from './screens/likes';
import Likers from './screens/likers';
import LogIn from './screens/auth/LogIn';
import PostEdit from './screens/post-edit';
import PostForm from './screens/post-create/PostForm';
import Posts from './screens/posts';
import Profile from './screens/profile';
import ProfileEdit from './screens/profile-edit';
import Saved from './screens/saved';
import Search from './screens/search';
import SelectUser from './screens/select-user';
import SignUp from './screens/auth/SignUp';
import TagPeople from './screens/tag-people';

const App = () => {
    const fetch = useAPI(),
        [key, setKey] = useState(0),
        auth = !!localStorage.getItem('mobile_auth_token'),
        [profile, setProfile] = useState(null);

    const resetApp = useCallback(session => {
        if (session) {
            localStorage.setItem('mobile_auth_token', session);
        } else {
            localStorage.removeItem('mobile_auth_token');
            emit('profile-update', null);
        }
        setKey(Math.random());
    }, []);

    const context = useMemo(
        () => ({
            profile,
            setProfile,
            reset: () => {
                fetch('/users/forget.json', { method: 'POST' });
                resetApp();
            }
        }),
        [profile]
    );

    const initProfile = async () => {
        const { data } = await fetch('/users/me.json', { method: 'GET' });
        setProfile(data);
    };

    useEffect(() => {
        if (auth) initProfile();
    }, [auth]);

    useEffect(() => {
        if (profile) emit('profile-update', profile);
    }, [profile]);

    useEffect(() => {
        const handler = event => {
            const { type, payload } = event.detail;

            switch (type) {
                case 'reset':
                    resetApp(payload);
                    break;
                default:
            }
        };

        return listen(handler);
    }, []);

    if (auth && !profile) return null;

    return (
        <app.Provider value={context}>
            <CacheProvider>
                <Layout>
                    <Router
                        key={key}
                        initialTab={auth ? 'home' : 'auth'}
                        initialScreen={auth ? 'feed' : 'login'}
                    >
                        <Screen name='login' component={LogIn} tabs={false} />
                        <Screen name='signup' component={SignUp} tabs={false} />
                        <Screen name='feed' component={Feed} />
                        <Screen name='search' component={Search} />
                        <Screen name='profile' component={Profile} />
                        <Screen name='profile-edit' component={ProfileEdit} emergence='sheet' />
                        <Screen name='followers' component={Followers} />
                        <Screen name='likers' component={Likers} />
                        <Screen name='posts' component={Posts} />
                        <Screen name='saved' component={Saved} />
                        <Screen name='likes' component={Likes} />
                        <Screen name='comments' component={Comments} tabs={false} />
                        <Screen name='post-edit' component={PostEdit} emergence='fade' />
                        <Screen name='tag-people' component={TagPeople} tabs={false} />
                        <Screen name='user-select' component={SelectUser} tabs={false} />
                        <Screen name='post-upload' component={ImagePreview} emergence='sheet' />
                        <Screen name='post-preview' component={ImagePreview} tabs={false} />
                        <Screen name='post-form' component={PostForm} tabs={false} />
                        <Screen name='post-camera' component={Camera} emergence='sheet' />
                    </Router>
                </Layout>
            </CacheProvider>
        </app.Provider>
    );
};

export default App;
