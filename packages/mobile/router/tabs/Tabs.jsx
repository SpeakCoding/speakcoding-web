import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@sc/ui';
import NewPost from './NewPost';
import s from './tabs.css';
import { useApp } from '../../tools';

const Tabs = ({ tab, hidden, switchTab, navigate }) => {
    const { profile } = useApp();

    const goToLikes = useCallback(() => {
        switchTab('likes', {
            screen: 'likes',
            params: { userid: profile.id }
        });
    }, []);

    const goToProfile = useCallback(() => {
        switchTab('profile', {
            screen: 'profile',
            params: { userid: profile.id }
        });
    }, []);

    return (
        <div key={tab} className={classNames(s.box, hidden && s.hidden)} data-control='tabs'>
            <div
                className={s.tab}
                data-tab='home'
                onClick={() => switchTab('home', { screen: 'feed' })}
            >
                <Icon name={tab === 'home' ? 'm/home-filled' : 'm/home'} size={24} />
            </div>
            <div
                className={s.tab}
                data-tab='search'
                onClick={() => switchTab('search', { screen: 'search' })}
            >
                <Icon name={tab === 'search' ? 'm/search-filled' : 'm/search'} size={24} />
            </div>
            <NewPost navigate={navigate} />
            <div className={s.tab} data-tab='likes' onClick={goToLikes}>
                <Icon name={tab === 'likes' ? 'm/heart-filled' : 'm/heart'} size={24} />
            </div>
            <div className={s.tab} data-tab='profile' onClick={goToProfile}>
                <Icon name={tab === 'profile' ? 'm/user-filled' : 'm/user'} size={24} />
            </div>
        </div>
    );
};

Tabs.propTypes = {
    tab: pt.string.isRequired,
    switchTab: pt.func.isRequired,
    navigate: pt.func.isRequired,
    hidden: pt.bool
};

Tabs.defaultProps = {
    hidden: false
};

export default Tabs;
