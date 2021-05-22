import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Code, Icon } from '@sc/ui';
import s from './style.css';

const code = `
class Post {
    user            User
    time            Time
    image           Image
    setOfImages     []Image
    video           Video
    setOfLikes      []Like
    caption         Text
    setOfComments   []Comment`;

const Example = () => {
    const [expanded, setExpanded] = useState(false);

    const toggle = useCallback(event => {
        event.stopPropagation();
        setExpanded(current => !current);
    }, []);

    return (
        <div className={classNames(s.post, expanded && s.expanded)}>
            <Code value={code} />
            <div className={s.expand}>
                <Icon name='chevron-right' size={24} />
            </div>
            <div className={s.control} onClick={toggle} />
        </div>
    );
};

export default Example;
