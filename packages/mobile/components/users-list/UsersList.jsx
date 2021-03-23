import React from 'react';
import pt from 'prop-types';
import { ScrollView } from '@sc/ui/mobile';
import Userpic from '../userpic';
import { useRouter } from '../../router';
import s from './users-list.css';

const UsersList = ({ items }) => {
    const { navigate } = useRouter();

    return (
        <ScrollView>
            {items.map(item => (
                <div
                    key={item.id}
                    className={s.item}
                    onClick={() => navigate('profile', { userid: item.id })}
                >
                    <Userpic href={item.profile_picture} size={44} />
                    <div>
                        <div className={s.name}>{item.user_name}</div>
                        <div className={s.bio}>{item.bio}</div>
                    </div>
                </div>
            ))}
        </ScrollView>
    );
};

UsersList.propTypes = {
    items: pt.array
};

UsersList.defaultProps = {
    items: []
};

export default UsersList;
