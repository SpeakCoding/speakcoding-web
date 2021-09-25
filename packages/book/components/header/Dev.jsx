import React from 'react';
import { Button } from '@sc/ui';
import { useAPI, useApp } from '../../tools';

const Dev = () => {
    const fetch = useAPI(),
        { courses, admin } = useApp();

    const resetCourses = () => {
        Object.keys(courses).forEach(id => {
            fetch(`/courses/${id}.json`, { method: 'DELETE' });
        });
    };

    if (!admin) return null;

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
