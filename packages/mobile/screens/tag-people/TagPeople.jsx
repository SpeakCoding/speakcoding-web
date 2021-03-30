import React, { useState } from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useRouter } from '../../router';
import Tag from './Tag';
import s from './tag-people.css';

const TagPeople = () => {
    const { route, goBack } = useRouter(),
        { pic, tags: initial = [], moveTag } = route.params,
        [tags, setTags] = useState(initial);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Tag people
                <Header.Right onClick={goBack}>Done</Header.Right>
            </Header>

            <div className={s.container}>
                <img className={s.image} src={pic} loading='lazy' alt='' />
                {tags.map(item => (
                    <Tag
                        key={item.user.id}
                        top={item.top}
                        left={item.left}
                        onMove={pos => moveTag(item.user.id, pos)}
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
