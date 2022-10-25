import React, { useCallback, useState } from 'react';
import { Drawer, Icon, Link } from '@sc/ui';
import { useAPI, useApp } from '../../../tools';
import L from '../../localize';
import AdminPanel from './AdminPanel';
import Progress from '../progress';
import s from './profile.css';

const Profile = () => {
    const [opened, setOpened] = useState(false),
        { profile } = useApp(),
        api = useAPI();

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    const logout = useCallback(async () => {
        localStorage.removeItem('book_auth_token');
        window.location.href = '/';
    }, []);

    const goToStripeSubscription = useCallback(async () => {
        const res = await api.post('/stripe/customer_portal_sessions.json');
        if (res?.data?.redirect_url) window.location.href = res.data.redirect_url;
    }, []);

    if (!profile) return null;

    return (
        <>
            <div className={s.control} onClick={open}>
                {profile.name}
                <img src={profile.picture} alt='' className={s.userpic} />
            </div>

            <Drawer opened={opened} onClose={close}>
                <div className={s.content}>
                    <div className={s.header}>
                        <img src={profile.picture} alt='' className={s.ava} />
                        <div className={s.info}>
                            <h3>{profile.name}</h3>
                            <div className={s.text}>{profile.email}</div>

                            {profile.group?.chat_url && profile.group?.title && (
                                <Link href={profile.group.chat_url} blank>
                                    <div className={s.link}>
                                        <div className={s.icon}>
                                            <Icon name='bubble' size={24} />
                                        </div>
                                        {profile.group?.title}
                                    </div>
                                </Link>
                            )}

                            {!profile.group?.chat_url && profile.group?.title && (
                                <div className={s.line}>
                                    <div className={s.icon}>
                                        <Icon name='bubble' size={24} />
                                    </div>
                                    {profile.group?.title}
                                </div>
                            )}

                            {profile.first_checkout_subscription_session_at && (
                                <div className={s.link} onClick={goToStripeSubscription}>
                                    <div className={s.icon}>
                                        <Icon name='gear' size={24} />
                                    </div>
                                    <L lang='en'>Manage subscription</L>
                                    <L lang='ru'>Управлять подпиской</L>
                                </div>
                            )}

                            <div className={s.link} onClick={logout}>
                                <div className={s.icon}>
                                    <Icon name='logout' size={24} />
                                </div>
                                <L lang='en'>Log out</L>
                                <L lang='ru'>Выйти</L>
                            </div>
                        </div>
                    </div>

                    <Progress />
                    <AdminPanel />
                </div>
            </Drawer>
        </>
    );
};

export default Profile;
