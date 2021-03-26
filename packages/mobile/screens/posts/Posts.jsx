import React from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { PostsList } from '../../components';
import { useRouter } from '../../tools';

const Posts = () => {
    const { route, goBack } = useRouter(),
        { items, scrollTo } = route.params;

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Posts
            </Header>
            <PostsList items={items} scrollTo={scrollTo} />
        </>
    );
};

export default Posts;
