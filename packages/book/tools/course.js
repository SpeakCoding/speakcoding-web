import { useCallback, useMemo, useState } from 'react';
import { useAPI } from './api';

const supported = ['en', 'ru'];

function getDefaultCourse() {
    const lang = window.navigator.language.slice(0, 2);

    return supported.includes(lang) ? lang : 'en';
}

export function useCourses() {
    const fetch = useAPI(),
        [courses, setCourses] = useState({});

    const loadCourses = useCallback(async () => {
        const res = await fetch('/courses.json', { method: 'GET' });

        const next = res.data.reduce(
            (memo, { course_id: id, data }) => ({
                ...memo,
                [id]: JSON.parse(data)
            }),
            {}
        );

        setCourses(next);
    }, []);

    const updateCourse = useCallback(
        (id, field, payload) => {
            const course = { ...(courses[id] || {}) };

            switch (field) {
                case 'pos': {
                    const { chapter, top } = payload;
                    if (course.pos?.chapter === chapter && course.pos?.top === top) return;
                    course.pos = { chapter, top };
                    fetch(`/courses/${id}.json`, {
                        method: 'PATCH',
                        body: { course: { data: JSON.stringify(course) } }
                    });
                    break;
                }

                default:
            }

            setCourses({ ...courses, [id]: course });
        },
        [courses]
    );

    return useMemo(
        () => ({
            courses,
            defaultCourse: getDefaultCourse(),
            loadCourses,
            updateCourse
        }),
        [courses]
    );
}
