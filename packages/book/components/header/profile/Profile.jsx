import React, { useCallback, useState } from 'react';
import { Drawer, Link } from '@sc/ui';
import { useApp } from '../../../tools';
import L from '../../localize';
import AdminPanel from './AdminPanel';
import Progress from '../progress';
import s from './profile.css';

const Profile = () => {
    const [opened, setOpened] = useState(false),
        { profile } = useApp();

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    const logout = useCallback(async () => {
        localStorage.removeItem('book_auth_token');
        window.location.href = '/';
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
                    <img src={profile.picture} alt='' className={s.ava} />
                    <div className={s.name}>{profile.name}</div>

                    {profile.group?.chat_url && (
                        <Link href={profile.group.chat_url} blank>
                            <div className={s.link}>{profile.group?.title || null}</div>
                        </Link>
                    )}
                    {!profile.group?.chat_url && (
                        <div className={s.text}>{profile.group?.title || null}</div>
                    )}

                    <div className={s.logout} onClick={logout}>
                        <L lang='en'>Log out</L>
                        <L lang='ru'>Выйти</L>
                    </div>
                    <Progress />
                    <AdminPanel />
                </div>
            </Drawer>
        </>
    );
};

export default Profile;
