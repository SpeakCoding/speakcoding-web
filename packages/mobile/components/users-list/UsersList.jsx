import React, { useEffect } from 'react';
import pt from 'prop-types';
import { ScrollView } from '@sc/ui/mobile';
import Follow from '../follow';
import Userpic from '../userpic';
import { useRouter } from '../../router';
import { useCache } from '../../tools';
import s from './users-list.css';

const UsersList = ({ items, follow, onClickUser }) => {
    const { navigate } = useRouter(),
        { add } = useCache();

    const handleClick = user => () => {
        if (onClickUser) onClickUser(user);
        else navigate('profile', { userid: user.id });
    };

    useEffect(() => {
        add('user', items);
    }, [items]);

    return (
        <ScrollView>
            {items.map(item => (
                <div key={item.id} className={s.item} onClick={handleClick(item)}>
                    <Userpic href={item.profile_picture} size={44} />
                    <div>
                        <div className={s.name}>{item.user_name}</div>
                        <div className={s.bio}>{item.bio}</div>
                    </div>
                    {follow && <Follow userid={item.id} />}
                </div>
            ))}
        </ScrollView>
    );
};

UsersList.propTypes = {
    items: pt.array,
    follow: pt.bool,
    onClickUser: pt.func
};

UsersList.defaultProps = {
    items: [],
    follow: false,
    onClickUser: undefined
};

export default UsersList;
