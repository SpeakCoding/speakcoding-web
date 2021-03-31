import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@sc/ui';
import NewPost from './NewPost';
import s from './tabs.css';

const Tabs = ({ tab, hidden, switchTab, navigate }) => {
    const goToLikes = useCallback(() => {
        switchTab('likes', {
            screen: 'likes',
            params: { userid: localStorage.getItem('userid') }
        });
    }, []);

    const goToProfile = useCallback(() => {
        switchTab('profile', {
            screen: 'profile',
            params: { userid: localStorage.getItem('userid') }
        });
    }, []);

    return (
        <div key={tab} className={classNames(s.box, hidden && s.hidden)}>
            <div className={s.tab} onClick={() => switchTab('home', { screen: 'feed' })}>
                <Icon name={tab === 'home' ? 'm/home-filled' : 'm/home'} size={24} />
            </div>
            <div className={s.tab} onClick={() => switchTab('search', { screen: 'search' })}>
                <Icon name={tab === 'search' ? 'm/search-filled' : 'm/search'} size={24} />
            </div>
            <NewPost navigate={navigate} />
            <div className={s.tab} onClick={goToLikes}>
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
    switchTab: pt.func.isRequired,
    navigate: pt.func.isRequired,
    hidden: pt.bool
};

Tabs.defaultProps = {
    hidden: false
};

export default Tabs;
