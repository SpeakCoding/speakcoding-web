import React from 'react';
import { Button } from '@sc/ui';
import { useAPI, useApp } from '../../tools';

const dev = window.location.hostname === 'localhost';

const Dev = () => {
    const fetch = useAPI(),
        { courses } = useApp();

    const resetCourses = () => {
        Object.keys(courses).forEach(id => {
            fetch(`/courses/${id}.json`, { method: 'DELETE' });
        });
    };

    if (!dev) return null;

    return (
        <>
            <div>
                <Button onClick={resetCourses}>Reset courses</Button>
                <br /> <br />
            </div>
        </>
    );
};

export default Dev;
