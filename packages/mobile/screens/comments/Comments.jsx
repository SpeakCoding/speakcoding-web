import React, { useCallback, useRef } from 'react';
import { Header, ScrollView } from '@sc/ui/mobile';
import { DateTime, Icon } from '@sc/ui';
import { Userpic } from '../../components';
import { useCacheState, useRouter } from '../../tools';
import Footer from './Footer';
import s from './comments.css';

const msInDay = 24 * 60 * 60 * 1000;

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
                <div className={s.item}>
                    <Userpic href={post.user.profile_picture} size={32} />
                    <div>
                        <div className={s.message}>
                            <div className={s.name}>{post.user.user_name}</div> {post.caption}
                        </div>
                        <div className={s.sub}>
                            <DateTime
                                value={post.created_at * 1000}
                                format='MMM D, YYYY [at] h:mm A'
                                relative={msInDay}
                            />
                        </div>
                    </div>
                </div>

                {post.comments.map(item => (
                    <div key={item.id} className={s.item}>
                        <Userpic href={item.user.profile_picture} size={32} />
                        <div>
                            <div className={s.message}>
                                <div className={s.name}>{item.user.user_name}</div> {item.text}
                            </div>
                            <div className={s.sub}>
                                <DateTime
                                    value={item.created_at * 1000}
                                    format='MMM D, YYYY [at] h:mm A'
                                    relative={msInDay}
                                />
                                <div
                                    className={s.reply}
                                    onClick={() => addReply(item.user.user_name)}
                                >
                                    Reply
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ScrollView>

            <Footer ref={$input} postid={postid} onSubmit={handleSubmit} />
        </>
    );
};

export default Comments;
