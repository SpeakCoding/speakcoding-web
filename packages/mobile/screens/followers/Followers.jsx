import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { round } from '@sc/tools/number';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useAPI, useCache, useRouter } from '../../tools';
import { QueryFilter, UsersList } from '../../components';
import s from './followers.css';

const Followers = () => {
    const fetch = useAPI(),
        { route, goBack } = useRouter(),
        { get, set } = useCache(),
        { userid, tab: initial } = route.params,
        [tab, setTab] = useState(initial),
        [user, setUser] = useState(get('user', userid)),
        [data, setData] = useState({ followers: [], followees: [] }),
        [query, setQuery] = useState('');

    const list = useMemo(() => {
        let res = data[tab];

        if (query) {
            const re = new RegExp(query, 'i');
            res = res.filter(item => re.test(item.user_name));
        }

        return res;
    }, [data, tab, query]);

    const init = async () => {
        const res = await Promise.all([
            fetch(`/users/${userid}.json`, { method: 'GET' }),
            fetch(`/users/${userid}/followers.json`, { method: 'GET' }),
            fetch(`/users/${userid}/followees.json`, { method: 'GET' })
        ]);

        [...(res[1]?.data || []), ...(res[2]?.data || [])].forEach(item => {
            set('user', item.id, item);
        });

        setUser(res[0]?.data);
        setData({
            followers: res[1]?.data || [],
            followees: res[2]?.data || []
        });
    };

    useEffect(() => {
        init();
    }, [userid]);

    return (
        <>
            <Header border={false}>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                {user?.user_name}
            </Header>

            {user && (
                <>
                    <div className={s.tabs}>
                        <div
                            className={classNames(s.tab, tab === 'followers' && s.active)}
                            onClick={() => setTab('followers')}
                        >
                            {round(user.followers_count)}
                            {user.followers_count > 1 ? ' Followers' : ' Follower'}
                        </div>
                        <div
                            className={classNames(s.tab, tab === 'followees' && s.active)}
                            onClick={() => setTab('followees')}
                        >
                            {round(user.followees_count)} Following
                        </div>
                    </div>

                    <div className={s.filter}>
                        <QueryFilter key={tab} placeholder='Search' onChange={setQuery} />
                    </div>

                    <UsersList items={list} follow />
                </>
            )}
        </>
    );
};

export default Followers;
