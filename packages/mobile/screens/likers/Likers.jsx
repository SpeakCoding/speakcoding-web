import React, { useEffect, useMemo, useState } from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useAPI, useRouter } from '../../tools';
import { QueryFilter, UsersList } from '../../components';
import s from './likers.css';

const Likers = () => {
    const fetch = useAPI(),
        { route, goBack } = useRouter(),
        { postid } = route.params,
        [data, setData] = useState([]),
        [query, setQuery] = useState('');

    const list = useMemo(() => {
        let res = data;

        if (query) {
            const re = new RegExp(query, 'i');
            res = res.filter(item => re.test(item.user_name));
        }

        return res;
    }, [data, query]);

    const init = async () => {
        const res = await fetch(`/posts/${postid}/likers.json`, { method: 'GET' });
        setData(res?.data || []);
    };

    useEffect(() => {
        init();
    }, [postid]);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Likes
            </Header>

            <div className={s.filter}>
                <QueryFilter placeholder='Search' onChange={setQuery} />
            </div>

            <UsersList items={list} follow />
        </>
    );
};

export default Likers;
