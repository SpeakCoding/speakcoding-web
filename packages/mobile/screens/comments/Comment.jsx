import React from 'react';
import pt from 'prop-types';
import { DateTime } from '@sc/ui';
import { useCacheState } from '../../tools';
import { Userpic } from '../../components';
import s from './comments.css';

const msInDay = 24 * 60 * 60 * 1000;

const Comment = ({ userid, text, time, addReply }) => {
    const [user] = useCacheState('user', userid);

    return (
        <div className={s.item}>
            <Userpic href={user.profile_picture} size={32} />
            <div>
                <div className={s.message}>
                    <div className={s.name}>{user.user_name}</div> {text}
                </div>
                <div className={s.sub}>
                    <DateTime
                        value={time * 1000}
                        format='MMM D, YYYY [at] h:mm A'
                        relative={msInDay}
                    />
                    {!!addReply && (
                        <div className={s.reply} onClick={() => addReply(user.user_name)}>
                            Reply
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Comment.propTypes = {
    userid: pt.number.isRequired,
    text: pt.string,
    time: pt.number,
    addReply: pt.func
};

Comment.defaultProps = {
    text: '',
    time: undefined,
    addReply: undefined
};

export default Comment;
