import React from 'react';
import L from '../../localize';
import Markdown from './Markdown';
import s from './types.css';

const Comment = ({ children }) => (
    <div className={s.comment}>
        <div className={s.right}>
            <L lang='en'>Right answer:</L>
            <L lang='ru'>Правильный ответ:</L>
        </div>
        <Markdown>{children}</Markdown>
    </div>
);

export default Comment;
