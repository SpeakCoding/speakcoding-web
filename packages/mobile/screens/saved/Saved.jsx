import React, { useEffect, useState } from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useAPI, useRouter } from '../../tools';
import { PostsGrid } from '../../components';

const Saved = () => {
    const fetch = useAPI(),
        { navigate, goBack } = useRouter(),
        [list, setList] = useState([]);

    const init = async () => {
        const res = await fetch('/posts/saved.json', { method: 'GET' });
        setList(res?.data || []);
    };

    const goToPosts = id => navigate('posts', { title: 'Saved posts', items: list, scrollTo: id });

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Saved posts
            </Header>

            <PostsGrid items={list} placeholder='No saved posts' onClickPost={goToPosts} />
        </>
    );
};

export default Saved;
