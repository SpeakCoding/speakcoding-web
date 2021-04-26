import React, { useCallback, useEffect } from 'react';
import pt from 'prop-types';
import { Button } from '@sc/ui/mobile';
import { useAPI, useApp, useCacheState } from '../../tools';
import s from './follow.css';

const Follow = ({ userid, onClick }) => {
    const fetch = useAPI(),
        { profile } = useApp(),
        [user, updateUser] = useCacheState('user', userid),
        self = userid === profile.id;

    const init = async () => {
        if (user) return;
        const res = await fetch(`/users/${userid}.json`, { method: 'GET' });
        updateUser(res.data);
    };

    const toggle = useCallback(
        event => {
            event.stopPropagation();

            const url = user.is_followee
                ? `/users/${user.id}/unfollow.json`
                : `/users/${user.id}/follow.json`;

            fetch(url, { method: 'POST' });

            updateUser({ is_followee: !user.is_followee });
            onClick(!user.is_followee);
        },
        [user]
    );

    useEffect(() => {
        init();
    }, []);

    if (self || !user) return null;

    return (
        <div className={s.action}>
            <Button
                block
                variant={user.is_followee ? 'outlined' : 'contained'}
                size='small'
                onClick={toggle}
            >
                {user.is_followee ? 'Following' : 'Follow'}
            </Button>
        </div>
    );
};

Follow.propTypes = {
    userid: pt.number.isRequired,
    onClick: pt.func
};

Follow.defaultProps = {
    onClick: () => {}
};

export default Follow;
