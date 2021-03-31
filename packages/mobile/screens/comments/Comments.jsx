import React, { useCallback, useRef } from 'react';
import { Header, ScrollView } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useCacheState, useRouter } from '../../tools';
import Comment from './Comment';
import Footer from './Footer';

const Comments = () => {
    const { route, goBack } = useRouter(),
        { postid } = route.params,
        [post, updatePost] = useCacheState('post', postid),
        $input = useRef(null);

    const handleSubmit = useCallback(
        comment => {
            updatePost({ comments: [...post.comments, comment] });
        },
        [post, updatePost]
    );

    const addReply = name => {
        $input.current.value = `@${name} ${$input.current.value}`;
        $input.current.focus();
    };

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Comments
            </Header>

            <ScrollView>
                <Comment userid={post.user.id} text={post.caption} time={post.created_at} />

                {post.comments.map(item => (
                    <Comment
                        key={item.id}
                        userid={item.user.id}
                        text={item.text}
                        time={item.created_at}
                        addReply={addReply}
                    />
                ))}
            </ScrollView>

            <Footer ref={$input} postid={postid} onSubmit={handleSubmit} />
        </>
    );
};

export default Comments;
