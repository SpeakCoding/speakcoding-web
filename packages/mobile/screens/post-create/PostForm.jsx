import React, { useCallback, useRef } from 'react';
import { Button, Header, TextInput } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useAPI, useRouter } from '../../tools';
import s from './form.css';

const PostForm = () => {
    const fetch = useAPI(),
        { route, navigate, goBack, switchTab } = useRouter(),
        { image } = route.params,
        fields = useRef({ image, caption: '', location: '', tags: [] });

    const handleChangeCaption = useCallback(event => {
        fields.current.caption = event.target.value.trim();
    }, []);

    const handleChangeLocation = useCallback(value => {
        fields.current.location = value.trim();
    }, []);

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

    const handleSubmit = useCallback(async () => {
        const post = { ...fields.current };

        if (post.tags.length > 0) {
            post.tags = post.tags.map(item => ({
                user_id: item.user.id,
                top: item.top,
                left: item.left
            }));
        } else delete post.tags;

        await fetch('/posts.json', { method: 'POST', body: { post } });
        switchTab('home', { reset: true });
    }, []);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                New post
                <Header.Right onClick={handleSubmit}>
                    <Button variant='text'>Share</Button>
                </Header.Right>
            </Header>

            <div className={s.info}>
                <img src={image} alt='' className={s.img} />
                <textarea
                    className={s.caption}
                    placeholder='Write a caption...'
                    rows='2'
                    onChange={handleChangeCaption}
                />
            </div>

            <div className={s.location}>
                <TextInput placeholder='Location' onChange={handleChangeLocation} />
            </div>

            <div
                className={s.people}
                onClick={() =>
                    navigate('tag-people', { pic: image, tags: fields.current.tags, changeTag })
                }
            >
                <span>Tag people</span>
                <div className={s.arrow}>
                    <Icon name='m/chevron-right' size={20} />
                </div>
            </div>
        </>
    );
};

export default PostForm;
