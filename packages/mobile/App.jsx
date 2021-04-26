import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

    const context = useMemo(
        () => ({
            profile,
            reset: () => {
                fetch('/users/forget.json', { method: 'POST' });
                localStorage.removeItem('mobile_auth_token');
                setKey(Math.random());
            }
        }),
        [profile]
    );

    const handleReset = useCallback(() => {
        if (window.confirm('Are you sure you want to log out?')) context.reset();
    }, []);

    const initProfile = async () => {
        const { data } = await fetch('/users/me.json', { method: 'GET' });
        setProfile(data);
    };

    useEffect(() => {
        if (auth) initProfile();
    }, [auth]);

    if (auth && !profile) return null;

    return (
        <app.Provider value={context}>
            <CacheProvider>
                <Layout onReset={handleReset}>
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
