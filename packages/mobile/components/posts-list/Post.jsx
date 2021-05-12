import React, {  useCallback, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { ActionSheet } from '@sc/ui/mobile';
import { DateTime, HL, Icon } from '@sc/ui';
import { useAPI, useApp, useCacheState, useRouter } from '../../tools';
import ActionIcon from './ActionIcon';
import User from './User';
import s from './post.css';

const msInDay = 24 * 60 * 60 * 1000,
    Dummy = ({ children }) => children;

const Post = ({ id, scroll, i }) => {
    const fetch = useAPI(),
        { profile } = useApp(),
        { navigate } = useRouter(),
        [post, updatePost, deletePost] = useCacheState('post', id),
        $node = useRef(null),
        scrolled = useRef(false),
        [menu, setMenu] = useState(false),
        self = post?.user.id === profile.id,
        Shape = i === 0 ? HL.Shape : Dummy;

    const toggleLike = useCallback(() => {
        const url = post.liked ? `/posts/${post.id}/unlike.json` : `/posts/${post.id}/like.json`;
        fetch(url, { method: 'POST' });
        updatePost({
            liked: !post.liked,
            likes_count: post.liked ? Math.max(post.likes_count - 1, 0) : post.likes_count + 1
        });
    }, [post]);

    const setLike = useCallback(() => {
        if (post.liked) return;
        fetch(`/posts/${post.id}/like.json`, { method: 'POST' });
        updatePost({ liked: true, likes_count: post.likes_count + 1 });
    }, [post]);

    const toggleSaved = useCallback(() => {
        const url = post.saved ? `/posts/${post.id}/unsave.json` : `/posts/${post.id}/save.json`;
        fetch(url, { method: 'POST' });
        updatePost({ saved: !post.saved });
    }, [post]);

    const handleDelete = useCallback(() => {
        fetch(`/posts/${id}.json`, { method: 'DELETE' });
        deletePost();
    }, [id]);

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
        <div ref={$node} className={s.box}>
            <div className={s.title}>
                <User id={post.user.id} Shape={Shape}>
                    {post.location && <div className={s.location}>{post.location}</div>}
                </User>

                <div className={s.more} onClick={() => setMenu(true)}>
                    <Icon name='m/dots-horizontal' size={24} />
                </div>
            </div>

            <Shape label='post-image' variant='inset'>
                <img
                    className={s.image}
                    src={post.image}
                    loading='lazy'
                    alt=''
                    onDoubleClick={setLike}
                />
            </Shape>

            <div className={s.actions}>
                <div className={s.heart}>
                    <ActionIcon
                        name={post.liked ? 'm/heart-filled' : 'm/heart'}
                        active={post.liked}
                        onClick={toggleLike}
                    />
                </div>
                <div className={s.action} onClick={() => navigate('comments', { postid: post.id })}>
                    <Icon name='m/bubble' size={24} />
                </div>
                <div className={s.gap} />
                <ActionIcon
                    name={post.saved ? 'm/bookmark-filled' : 'm/bookmark'}
                    active={post.saved}
                    onClick={toggleSaved}
                />
            </div>

            <div className={s.body}>
                {post.likes_count > 0 && (
                    <>
                        <Shape label='post-likes'>
                            <div
                                className={s.likes}
                                onClick={() => navigate('likers', { postid: post.id })}
                            >
                                {post.likes_count} {post.likes_count > 1 ? 'likes' : 'like'}
                            </div>
                        </Shape>
                        <br />
                    </>
                )}

                {post.caption && (
                    <>
                        <div className={s.captionWrapper}>
                            <Shape label='post-caption'>
                                <span className={s.caption}>{post.caption}</span>
                            </Shape>
                        </div>
                    </>
                )}

                {post.comments?.length > 0 && (
                    <>
                        <div className={s.commentsWrapper}>
                            <Shape label='post-comments'>
                                <span
                                    className={s.comments}
                                    onClick={() => navigate('comments', { postid: post.id })}
                                >
                                    {post.comments.length > 1
                                        ? `View all ${post.comments.length} comments`
                                        : 'View 1 comment'}
                                </span>
                            </Shape>
                        </div>
                    </>
                )}

                <Shape label='post-date'>
                    <div className={s.date}>
                        <DateTime
                            value={post.created_at * 1000}
                            format='MMM D, YYYY [at] h:mm A'
                            relative={msInDay}
                        />
                    </div>
                </Shape>
            </div>

            <ActionSheet opened={menu} onClose={() => setMenu(false)}>
                {self && (
                    <>
                        <ActionSheet.Option onClick={() => navigate('post-edit', { postid: id })}>
                            Edit
                        </ActionSheet.Option>
                        <ActionSheet.Option emphasis onClick={handleDelete}>
                            Delete
                        </ActionSheet.Option>
                    </>
                )}

                {!self && (
                    <>
                        <ActionSheet.Option onClick={toggleLike}>
                            {post.liked ? 'Unlike' : 'Like'}
                        </ActionSheet.Option>
                        <ActionSheet.Option onClick={toggleSaved}>
                            {post.saved ? 'Remove from Saved' : 'Save'}
                        </ActionSheet.Option>
                    </>
                )}
            </ActionSheet>
        </div>
    );
};

Post.propTypes = {
    id: pt.number.isRequired,
    scroll: pt.bool,
    i: pt.number
};

Post.defaultProps = {
    scroll: false,
    i: undefined
};

export default Post;
