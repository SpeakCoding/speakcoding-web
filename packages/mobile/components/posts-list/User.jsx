import React from 'react';
import pt from 'prop-types';
import { useCacheState, useRouter } from '../../tools';
import Userpic from '../userpic';
import s from './post.css';

const User = ({ id, children }) => {
    const [user] = useCacheState('user', id),
        { navigate } = useRouter();

    return (
        <>
            <Userpic
                href={user?.profile_picture}
                size={36}
                data-role='post-userpic'
                onClick={() => navigate('profile', { userid: user.id })}
            />

            <div className={s.info}>
                <div className={s.name} data-role='post-name'>
                    {user?.user_name}
                </div>
                {children}
            </div>
        </>
    );
};

User.propTypes = {
    id: pt.number.isRequired
};

export default User;
