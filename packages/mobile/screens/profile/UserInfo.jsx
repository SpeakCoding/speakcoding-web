import React, { useCallback } from 'react';
import pt from 'prop-types';
import { round } from '@sc/tools/number';
import { Button } from '@sc/ui/mobile';
import { useRouter } from '../../tools';
import { Follow, Userpic } from '../../components';
import s from './profile.css';

const UserInfo = ({ user, self, goToPosts }) => {
    const { navigate } = useRouter();

    const openEdit = useCallback(() => {
        navigate('profile-edit', { user });
    }, [user]);

    return (
        <div className={s.user}>
            <div className={s.main}>
                <Userpic href={user?.profile_picture} size={86} />
                <div className={s.counters}>
                    <div onClick={() => goToPosts()}>
                        <div className={s.count}>{round(user.posts_count)}</div>
                        {user.posts_count > 1 ? 'Posts' : 'Post'}
                    </div>
                    <div
                        onClick={() => navigate('followers', { userid: user.id, tab: 'followers' })}
                    >
                        <div className={s.count}>{round(user.followers_count)}</div>
                        {user.followers_count > 1 ? 'Followers' : 'Follower'}
                    </div>
                    <div
                        onClick={() => navigate('followers', { userid: user.id, tab: 'followees' })}
                    >
                        <div className={s.count}>{round(user.followees_count)}</div>
                        Following
                    </div>
                </div>
            </div>
            <div className={s.name}>{user.user_name}</div>
            <div className={s.bio}>{user.bio}</div>

            {self && (
                <div className={s.action}>
                    <Button block variant='outlined' size='small' onClick={openEdit}>
                        Edit profile
                    </Button>
                </div>
            )}

            {!self && <Follow userid={user.id} />}
        </div>
    );
};

UserInfo.propTypes = {
    user: pt.object.isRequired,
    self: pt.bool,
    goToPosts: pt.func
};

UserInfo.defaultProps = {
    self: false,
    goToPosts: () => {}
};

export default UserInfo;
