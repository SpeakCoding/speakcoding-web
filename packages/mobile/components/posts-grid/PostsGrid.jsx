import React, { useEffect } from 'react';
import pt from 'prop-types';
import { ScrollView } from '@sc/ui/mobile';
import { useCache } from '../../tools';
import s from './posts-grid.css';

const PostsGrid = ({ items, placeholder, onClickPost }) => {
    const { add } = useCache();

    useEffect(() => {
        add('post', items);
    }, [items]);

    return (
        <ScrollView>
            <div className={s.grid}>
                {items.map(item => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt=''
                        className={s.tile}
                        loading='lazy'
                        onClick={() => onClickPost(item.id)}
                    />
                ))}
            </div>
            {items.length === 0 && <div className={s.empty}>{placeholder}</div>}
        </ScrollView>
    );
};

PostsGrid.propTypes = {
    items: pt.array,
    placeholder: pt.string,
    onClickPost: pt.func
};

PostsGrid.defaultProps = {
    items: [],
    placeholder: '',
    onClickPost: () => {}
};

export default PostsGrid;
