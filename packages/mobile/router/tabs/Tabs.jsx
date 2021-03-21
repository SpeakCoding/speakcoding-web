import React, { useCallback } from 'react';
import pt from 'prop-types';
import { Icon } from '@sc/ui';
import s from './tabs.css';

const Tabs = ({ tab, switchTab }) => {
    const goToProfile = useCallback(() => {
        switchTab('profile', 'profile', { userid: localStorage.getItem('userid') });
    }, []);

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
            <div className={s.tab} onClick={goToProfile}>
                <Icon name={tab === 'profile' ? 'm/user-filled' : 'm/user'} size={24} />
            </div>
        </div>
    );
};

Tabs.propTypes = {
    tab: pt.string.isRequired,
    switchTab: pt.func.isRequired
};

export default Tabs;
