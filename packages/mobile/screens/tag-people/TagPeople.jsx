import React, { useCallback, useRef, useState } from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useRouter } from '../../router';
import { getCursorPosition } from './utils';
import Tag from './Tag';
import s from './tag-people.css';

const TagPeople = () => {
    const { route, navigate, goBack } = useRouter(),
        { pic, tags: initial = [], changeTag } = route.params,
        [tags, setTags] = useState(initial),
        $box = useRef(null),
        newTag = useRef(null);

    const handleChangeTag = (user, pos) => {
        const tag = tags.find(item => item.user.id === user.id);
        if (tag && !pos) setTags(tags.filter(item => item.user.id !== user.id));
        changeTag(user, pos);
    };

    const handleAddTag = useCallback(
        user => {
            if (!tags.some(item => item.user.id === user.id)) {
                setTags([...tags, { user, ...newTag.current }]);
                changeTag(user, newTag.current);
            }

            newTag.current = null;
        },
        [tags]
    );

    const handleClickImage = useCallback(
        event => {
            const cursor = getCursorPosition(event),
                box = $box.current.getBoundingClientRect();

            newTag.current = {
                top: (cursor.y - box.y) / box.height,
                left: (cursor.x - box.x) / box.width
            };

            navigate('user-select', { onSelect: handleAddTag });
        },
        [tags]
    );

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Tag people
                <Header.Right onClick={goBack}>Done</Header.Right>
            </Header>

            <div ref={$box} className={s.container} onMouseDown={handleClickImage}>
                <img className={s.image} src={pic} loading='lazy' alt='' />
                {tags.map(item => (
                    <Tag
                        key={item.user.id}
                        top={item.top}
                        left={item.left}
                        onChange={pos => handleChangeTag(item.user, pos)}
                    >
                        {item.user.user_name}
                    </Tag>
                ))}
            </div>

            <div className={s.hint}>
                Tag the photo to tag people. Tap again to&nbsp;remove it. <br />
                <br />
                Press and drag to move.
            </div>
        </>
    );
};

export default TagPeople;
