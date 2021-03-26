import React, { useEffect } from 'react';
import pt from 'prop-types';
import { ScrollView } from '@sc/ui/mobile';
import { useCache } from '../../tools';
import Post from './Post';

const PostsList = ({ items, scrollTo }) => {
    const { add } = useCache();

    useEffect(() => {
        add('post', items);
    }, [items]);

    return (
        <ScrollView>
            {items.map(post => (
                <Post key={post.id} id={post.id} scroll={post.id === scrollTo} />
            ))}
        </ScrollView>
    );
};

PostsList.propTypes = {
    items: pt.array,
    scrollTo: pt.number
};

PostsList.defaultProps = {
    items: [],
    scrollTo: undefined
};

export default PostsList;
