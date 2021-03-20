import React, { useCallback } from 'react';
import pt from 'prop-types';
import { round } from '@sc/tools/number';
import { Button } from '@sc/ui/mobile';
import { useAPI } from '../../tools';
import Userpic from '../../components/userpic';
import s from './profile.css';

const UserInfo = ({ user, update }) => {
    const fetch = useAPI();

    const toggleFollow = useCallback(() => {
        const url = user.is_followee
            ? `/users/${user.id}/unfollow.json`
            : `/users/${user.id}/follow.json`;

        fetch(url, { method: 'POST' });
        update({ is_followee: !user.is_followee });
    }, [user, update]);

    return (
        <div className={s.user}>
            <div className={s.main}>
                <Userpic href={user?.profile_picture} size={86} />
                <div className={s.counters}>
                    <div>
                        <div className={s.count}>{round(user.posts_count)}</div>
                        {user.posts_count > 1 ? 'Posts' : 'Post'}
                    </div>
                    <div>
                        <div className={s.count}>{round(user.followers_count)}</div>
                        {user.followers_count > 1 ? 'Followers' : 'Follower'}
                    </div>
                    <div>
                        <div className={s.count}>{round(user.followees_count)}</div>
                        Following
                    </div>
                </div>
            </div>
            <div className={s.name}>{user.user_name}</div>
            <div className={s.bio}>{user.bio}</div>
            <div className={s.follow}>
                <Button
                    block
                    variant={user.is_followee ? 'outlined' : 'contained'}
                    size='small'
                    onClick={toggleFollow}
                >
                    {user.is_followee ? 'Following' : 'Follow'}
                </Button>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    user: pt.object.isRequired,
    update: pt.func.isRequired
};

export default UserInfo;
