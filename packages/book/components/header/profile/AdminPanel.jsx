import React, { useCallback, useState } from 'react';
import { Button, Modal } from '@sc/ui';
import { useAPI, useApp } from '../../../tools';
import s from './admin.css';

const AdminPanel = () => {
    const api = useAPI(),
        { courses, admin } = useApp(),
        [opened, setOpened] = useState(false);

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    const resetCourses = async () => {
        const req = Object.keys(courses).map(id => api.delete(`/courses/${id}.json`));
        await Promise.all(req);
        window.location.reload();
    };

    const resetWelcome = async () => {
        localStorage.setItem('flag/tutorial', 'forced');
        window.location.reload();
    };

    if (!admin) return null;

    return (
        <div>
            <br />
            <Button onClick={open}>Open Admin Panel</Button>
            <br />
            <br />
            <Modal opened={opened} onClose={close}>
                <div className={s.box}>
                    <Button onClick={resetCourses}>Reset courses</Button>
                    &nbsp;
                    <Button onClick={resetWelcome}>Reset welcome message</Button>
                </div>
            </Modal>
        </div>
    );
};

export default AdminPanel;
