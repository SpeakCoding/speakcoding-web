import React from 'react';
import { Button } from '@sc/ui';
import { useAPI, useApp } from '../../../tools';

const AdminPanel = () => {
    const fetch = useAPI(),
        { courses, admin } = useApp();

    const resetCourses = () => {
        Object.keys(courses).forEach(id => {
            fetch(`/courses/${id}.json`, { method: 'DELETE' });
        });
    };

    if (!admin) return null;

    return (
        <div>
            <br />
            <Button onClick={resetCourses}>Reset courses</Button>
            <br />
            <br />
        </div>
    );
};

export default AdminPanel;
