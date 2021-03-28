import React, { useEffect, useState } from 'react';
import { Header, ScrollView } from '@sc/ui/mobile';
import { DateTime } from '@sc/ui';
import { useAPI, useRouter } from '../../tools';
import Userpic from '../../components/userpic';
import s from './likes.css';

const msInDay = 24 * 60 * 60 * 1000;

const Likes = () => {
    const fetch = useAPI(),
        { route, navigate } = useRouter(),
        { userid } = route.params,
        [data, setData] = useState([]);

    const init = async () => {
        const res = await fetch(`/users/${userid}/whats_new.json`, { method: 'GET' });
        setData(res?.data || []);
    };

    useEffect(() => {
        init();
    }, [userid]);

    return (
        <>
            <Header>Likes</Header>
            <ScrollView>
                {data.map(({ user, post, created_at: time }) => (
                    <div key={`${user.id}-${post.id}`} className={s.item}>
                        <Userpic
                            href={user.profile_picture}
                            size={44}
                            onClick={() => navigate('profile', { userid: user.id })}
                        />
                        <div>
                            <div className={s.name}>{user.user_name}</div>
                            <div className={s.date}>
                                <DateTime
                                    value={time * 1000}
                                    format='MMM D, YYYY [at] h:mm A'
                                    relative={msInDay}
                                />
                            </div>
                        </div>
                        <img className={s.pic} src={post.image} loading='lazy' alt='' />
                    </div>
                ))}
            </ScrollView>
        </>
    );
};

export default Likes;
