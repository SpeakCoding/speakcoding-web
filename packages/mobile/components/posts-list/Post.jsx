import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import { DateTime, Icon } from '@sc/ui';
import { useAPI, useCacheState, useRouter } from '../../tools';
import ActionIcon from './ActionIcon';
import Userpic from '../userpic';
import s from './post.css';

const msInMin = 60 * 1000,
    msInDay = 24 * 60 * 60 * 1000;

const Post = ({ id, scroll }) => {
    const fetch = useAPI(),
        { navigate } = useRouter(),
        [post, updatePost] = useCacheState('post', id),
        $node = useRef(null),
        scrolled = useRef(false);

    const toggleLike = useCallback(() => {
        const url = post.liked ? `/posts/${post.id}/unlike.json` : `/posts/${post.id}/like.json`;
        fetch(url, { method: 'POST' });
        updatePost({ liked: !post.liked });
    }, [post]);

    const setLike = useCallback(() => {
        if (post.liked) return;
        fetch(`/posts/${post.id}/like.json`, { method: 'POST' });
        updatePost({ liked: true });
    }, [post]);

    const toggleSaved = useCallback(() => {
        const url = post.saved ? `/posts/${post.id}/unsave.json` : `/posts/${post.id}/save.json`;
        fetch(url, { method: 'POST' });
        updatePost({ saved: !post.saved });
    }, [post]);

    useEffect(() => {
        if (scroll && $node.current && !scrolled.current) {
            const $parent = $node.current.parentElement,
                { top: postTop } = $node.current.getBoundingClientRect(),
                { top: boxTop } = $parent.getBoundingClientRect();

            $parent.scrollTop = postTop - boxTop;
            scrolled.current = true;
        }
    }, [post, scroll]);

    if (!post) return null;

    return (
        <div ref={$node} id={`post-${id}`} className={s.box}>
            <div className={s.title}>
                <Userpic
                    href={post.user?.profile_picture}
                    size={36}
                    onClick={() => navigate('profile', { userid: post.user.id })}
                />

                <div className={s.info}>
                    <div className={s.name}>{post.user?.user_name}</div>
                    {post.location && <div className={s.location}>{post.location}</div>}
                </div>

                <div className={s.more}>
                    <Icon name='m/dots-horizontal' size={24} />
                </div>
            </div>

            <img
                className={s.image}
                src={post.image}
                loading='lazy'
                alt=''
                onDoubleClick={setLike}
            />

            <div className={s.actions}>
                <div className={s.heart}>
                    <ActionIcon
                        name={post.liked ? 'm/heart-filled' : 'm/heart'}
                        active={post.liked}
                        onClick={toggleLike}
                    />
                </div>
                <div className={s.action}>
                    <Icon name='m/bubble' size={24} />
                </div>
                <div className={s.gap} />
                <ActionIcon
                    name={post.saved ? 'm/bookmark-filled' : 'm/bookmark'}
                    active={post.saved}
                    onClick={toggleSaved}
                />
            </div>

            {post.likes_count > 0 && (
                <div className={s.likes} onClick={() => navigate('likes', { postid: post.id })}>
                    {post.likes_count} {post.likes_count > 1 ? 'likes' : 'like'}
                </div>
            )}

            {post.caption && <div className={s.caption}>{post.caption}</div>}

            {post.comments?.length > 0 && (
                <div className={s.comments}>
                    {post.comments.length > 1
                        ? `View all ${post.comments.length} comments`
                        : 'View 1 comment'}
                </div>
            )}

            <div className={s.date}>
                {Date.now() - post.created_at * 1000 <= msInMin && 'Just now'}
                {Date.now() - post.created_at * 1000 > msInMin && (
                    <DateTime
                        value={post.created_at * 1000}
                        format='MMM D, YYYY [at] h:mm A'
                        relative={msInDay}
                    />
                )}
            </div>
        </div>
    );
};

Post.propTypes = {
    id: pt.number.isRequired,
    scroll: pt.bool
};

Post.defaultProps = {
    scroll: false
};

export default Post;
