import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@sc/ui';
import { useAPI, useApp, useCacheState, useRouter } from '../../tools';
import Header from './Header';
import UserInfo from './UserInfo';
import { PostsGrid } from '../../components';
import s from './profile.css';

const Profile = () => {
    const { route, focused, navigate } = useRouter(),
        fetch = useAPI(),
        { profile } = useApp(),
        [user, updateUser] = useCacheState('user', route.params.userid),
        [tab, setTab] = useState('posts'),
        [data, setData] = useState({ posts: [], tags: [] }),
        self = route.params.userid === profile.id;

    const initProfile = useCallback(async () => {
        const res = await fetch(`/users/${route.params.userid}.json`, { method: 'GET' });
        updateUser(res.data);
    }, []);

    const initPosts = async () => {
        const res = await Promise.all([
            fetch(`/users/${route.params.userid}/posts.json`, { method: 'GET' }),
            fetch(`/posts/tagged.json?user_id=${route.params.userid}`, { method: 'GET' })
        ]);

        setData({
            posts: res[0]?.data || [],
            tags: res[1]?.data || []
        });
    };

    const goToPosts = id =>
        navigate('posts', { title: user.user_name, items: data[tab], scrollTo: id });

    useEffect(() => {
        if (focused && route.params.userid) {
            initProfile();
            initPosts();
        }
    }, [focused]);

    return (
        <>
            <Header self={self}>{user?.user_name}</Header>

            {user && (
                <>
                    <UserInfo user={user} self={self} goToPosts={goToPosts} />

                    <div className={s.tabs}>
                        <div
                            className={classNames(s.tab, tab === 'posts' && s.active)}
                            onClick={() => setTab('posts')}
                        >
                            <Icon name='m/grid' size={24} />
                        </div>
                        <div
                            className={classNames(s.tab, tab === 'tags' && s.active)}
                            onClick={() => setTab('tags')}
                        >
                            <Icon name='m/user-tag' size={24} />
                        </div>
                    </div>

                    <PostsGrid
                        items={data[tab]}
                        placeholder='No posts yet'
                        onClickPost={goToPosts}
                    />
                </>
            )}
        </>
    );
};

export default Profile;
