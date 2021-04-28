import React, { useCallback, useState } from 'react';
import { Drawer } from '@sc/ui';
import { useApp } from '../../tools';
// import { signOut } from '../../tools/auth';
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
                    <div className={s.email}>{profile.email}</div>
                    <div className={s.logout} onClick={logout}>
                        Log out
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Profile;
