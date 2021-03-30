import React, { useCallback, useEffect, useRef } from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useAPI, useCacheState, useRouter } from '../../tools';
import { Userpic } from '../../components';
import s from './post-edit.css';

const copy = tags => tags.map(item => ({ ...item }));

const PostEdit = () => {
    const fetch = useAPI(),
        { route, navigate, goBack } = useRouter(),
        { postid } = route.params,
        [post, updatePost] = useCacheState('post', postid),
        $caption = useRef(null),
        fields = useRef({ caption: post.caption, tags: copy(post.tags) });

    const changeTag = (user, pos) => {
        const tag = fields.current.tags.find(item => item.user.id === user.id);

        if (tag && pos) {
            tag.top = pos.top;
            tag.left = pos.left;
        }

        if (tag && !pos)
            fields.current.tags = fields.current.tags.filter(item => item.user.id !== user.id);

        if (!tag && pos) fields.current.tags.push({ user, ...pos });
    };

    const handleChangeCaption = useCallback(event => {
        fields.current.caption = event.target.value.trim();
    }, []);

    const handleSubmit = useCallback(() => {
        const payload = {
            caption: fields.current.caption,
            tags: fields.current.tags.map(item => ({
                user_id: item.user.id,
                top: item.top,
                left: item.left
            }))
        };

        fetch(`/posts/${postid}.json`, { method: 'PUT', body: { post: payload } });
        updatePost(fields.current);
        goBack();
    }, [postid]);

    useEffect(() => {
        setTimeout(() => {
            $caption.current.value = '';
            $caption.current.focus();
            $caption.current.value = post.caption;
        }, 100);
    }, []);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>Cancel</Header.Left>
                Edit info
                <Header.Right onClick={handleSubmit}>Done</Header.Right>
            </Header>

            <div className={s.title}>
                <Userpic href={post.user.profile_picture} size={36} />

                <div className={s.info}>
                    <div className={s.name}>{post.user.user_name}</div>
                    {post.location && <div className={s.location}>{post.location}</div>}
                </div>
            </div>

            <img className={s.image} src={post.image} loading='lazy' alt='' />

            <div
                className={s.tags}
                onClick={() =>
                    navigate('tag-people', {
                        pic: post.image,
                        tags: fields.current.tags,
                        changeTag
                    })
                }
            >
                <Icon name='m/user-tag' size={16} />
                <span>Tag people</span>
            </div>

            <textarea
                ref={$caption}
                className={s.caption}
                defaultValue={post.caption}
                rows='4'
                onChange={handleChangeCaption}
            />
        </>
    );
};

export default PostEdit;
