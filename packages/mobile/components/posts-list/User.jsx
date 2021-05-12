import React from 'react';
import pt from 'prop-types';
import { useCacheState, useRouter } from '../../tools';
import Userpic from '../userpic';
import s from './post.css';

const User = ({ id, Shape, children }) => {
    const [user] = useCacheState('user', id),
        { navigate } = useRouter();

    return (
        <>
            <Shape label='post-userpic' variant='circle'>
                <Userpic
                    href={user?.profile_picture}
                    size={36}
                    data-role='post-userpic'
                    onClick={() => navigate('profile', { userid: user.id })}
                />
            </Shape>

            <div className={s.info}>
                <Shape label='post-name'>
                    <div className={s.name}>{user?.user_name}</div>
                </Shape>

                {children}
            </div>
        </>
    );
};

User.propTypes = {
    id: pt.number.isRequired,
    Shape: pt.func.isRequired
};

export default User;
