import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Header, ScrollView } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useAPI, useCache, useRouter } from '../../tools';
import UserInfo from './UserInfo';
import s from './profile.css';

const Profile = () => {
    const { route, goBack } = useRouter(),
        fetch = useAPI(),
        { get, set } = useCache(),
        [user, setUser] = useState(get('user', route.params.userid)),
        [tab, setTab] = useState('posts'),
        [data, setData] = useState({ posts: [], tags: [] });

    const initProfile = async () => {
        const res = await fetch(`/users/${route.params.userid}.json`, { method: 'GET' });

        if (res.data) {
            setUser(res.data);
            set('user', res.data.id, res.data);
        }
    };

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

    const update = useCallback(
        fields => {
            const next = { ...user, ...fields };
            setUser(next);
            set(user.id, next);
        },
        [user]
    );

    useEffect(() => {
        if (!route.params.userid) return;
        initProfile();
        initPosts();
    }, []);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>

                {user?.user_name}

                <Header.Right>
                    <Icon name='m/dots-horizontal' size={24} />
                </Header.Right>
            </Header>

            {user && (
                <>
                    <UserInfo user={user} update={update} />

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

                    <ScrollView>
                        <div className={s.grid}>
                            {data[tab].map(item => (
                                <img key={item.id} src={item.image} alt='' className={s.tile} />
                            ))}
                        </div>
                        {data[tab].length === 0 && <div className={s.empty}>No posts yet</div>}
                    </ScrollView>
                </>
            )}
        </>
    );
};

export default Profile;