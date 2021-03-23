import React, { useCallback } from 'react';
import pt from 'prop-types';
import { DateTime, Icon } from '@sc/ui';
import { useAPI, useRouter } from '../../tools';
import { Userpic } from '../../components';
import ActionIcon from './ActionIcon';
import s from './post.css';

const msInMin = 60 * 1000,
    msInDay = 24 * 60 * 60 * 1000;

const Post = ({ data, update }) => {
    const fetch = useAPI(),
        { navigate } = useRouter();

    const toggleLike = useCallback(() => {
        const url = data.liked ? `/posts/${data.id}/unlike.json` : `/posts/${data.id}/like.json`;
        fetch(url, { method: 'POST' });
        update(data.id, { liked: !data.liked });
    }, [data.id, data.liked, update]);

    const setLike = useCallback(() => {
        if (data.liked) return;
        fetch(`/posts/${data.id}/like.json`, { method: 'POST' });
        update(data.id, { liked: true });
    }, [data.id, data.liked, update]);

    const toggleSaved = useCallback(() => {
        const url = data.saved ? `/posts/${data.id}/unsave.json` : `/posts/${data.id}/save.json`;
        fetch(url, { method: 'POST' });
        update(data.id, { saved: !data.saved });
    }, [data.id, data.saved, update]);

    const goToProfile = useCallback(() => {
        navigate('profile', { userid: data.user.id });
    }, [data.id]);

    return (
        <div className={s.box}>
            <div className={s.title}>
                <Userpic href={data.user?.profile_picture} size={36} onClick={goToProfile} />

                <div className={s.info}>
                    <div className={s.name}>{data.user?.user_name}</div>
                    {data.location && <div className={s.location}>{data.location}</div>}
                </div>

                <div className={s.more}>
                    <Icon name='m/dots-horizontal' size={24} />
                </div>
            </div>

            <img
                className={s.image}
                src={data.image}
                loading='lazy'
                alt=''
                onDoubleClick={setLike}
            />

            <div className={s.actions}>
                <div className={s.heart}>
                    <ActionIcon
                        name={data.liked ? 'm/heart-filled' : 'm/heart'}
                        active={data.liked}
                        onClick={toggleLike}
                    />
                </div>
                <div className={s.action}>
                    <Icon name='m/bubble' size={24} />
                </div>
                <div className={s.gap} />
                <ActionIcon
                    name={data.saved ? 'm/bookmark-filled' : 'm/bookmark'}
                    active={data.saved}
                    onClick={toggleSaved}
                />
            </div>

            {data.likes_count > 0 && (
                <div className={s.likes}>
                    {data.likes_count} {data.likes_count > 1 ? 'likes' : 'like'}
                </div>
            )}

            {data.caption && <div className={s.caption}>{data.caption}</div>}

            {data.comments?.length > 0 && (
                <div className={s.comments}>
                    {data.comments.length > 1
                        ? `View all ${data.comments.length} comments`
                        : 'View 1 comment'}
                </div>
            )}

            <div className={s.date}>
                {Date.now() - data.created_at * 1000 <= msInMin && 'Just now'}
                {Date.now() - data.created_at * 1000 > msInMin && (
                    <DateTime
                        value={data.created_at * 1000}
                        format='MMM D, YYYY [at] h:mm A'
                        relative={msInDay}
                    />
                )}
            </div>
        </div>
    );
};

Post.propTypes = {
    data: pt.object.isRequired,
    update: pt.func.isRequired
};

export default Post;
