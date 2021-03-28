/* eslint-disable no-param-reassign */
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import pt from 'prop-types';
import { Button } from '@sc/ui/mobile';
import { Userpic } from '../../components';
import { useAPI, useCacheState } from '../../tools';
import s from './footer.css';

const Footer = forwardRef(({ postid, onSubmit }, ref) => {
    const fetch = useAPI(),
        userid = localStorage.getItem('userid'),
        [user, updateUser] = useCacheState('user', userid),
        [empty, setEmpty] = useState(true);

    const init = async () => {
        if (user) return;
        const res = await fetch(`/users/${userid}/posts.json`, { method: 'GET' });
        updateUser(res.data);
    };

    const handleChange = useCallback(event => {
        setEmpty(event.target.value.trim().length === 0);
    }, []);

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();

            const text = event.target.elements.text.value.trim();

            const res = await fetch('/comments.json', {
                method: 'POST',
                body: { comment: { post_id: postid, text } }
            });

            onSubmit(res.data);
            ref.current.value = '';
            setEmpty(true);
        },
        [postid, user, onSubmit]
    );

    useEffect(() => {
        init();
    }, []);

    if (!user) return null;

    return (
        <div className={s.box}>
            <Userpic href={user.profile_picture} size={44} />
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    ref={ref}
                    autoComplete='off'
                    className={s.input}
                    name='text'
                    placeholder='Add a comment...'
                    type='text'
                    onChange={handleChange}
                />
                <div className={s.submit}>
                    <Button disabled={empty} type='submit' variant='text'>
                        Post
                    </Button>
                </div>
            </form>
        </div>
    );
});

Footer.propTypes = {
    postid: pt.number.isRequired,
    onSubmit: pt.func.isRequired
};

export default Footer;
