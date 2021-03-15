import React from 'react';
import { Icon } from '@sc/ui';
import { useRouter } from '../../tools';
import s from './tabs.css';

const Tabs = () => {
    const { tab, switchTab } = useRouter();

    return (
        <div className={s.box}>
            <div className={s.tab} onClick={() => switchTab('home', 'feed')}>
                <Icon name={tab === 'home' ? 'm/home-filled' : 'm/home'} size={24} />
            </div>
            <div className={s.tab} onClick={() => switchTab('search', 'search')}>
                <Icon name={tab === 'search' ? 'm/search' : 'm/search'} size={24} />
            </div>
            <div className={s.tab}>
                <Icon name='m/plus' size={24} />
            </div>
            <div className={s.tab} onClick={() => switchTab('likes', 'likes')}>
                <Icon name={tab === 'likes' ? 'm/heart-filled' : 'm/heart'} size={24} />
            </div>
            <div className={s.tab} onClick={() => switchTab('profile', 'profile')}>
                <Icon name={tab === 'profile' ? 'm/user-filled' : 'm/user'} size={24} />
            </div>
        </div>
    );
};

export default Tabs;
