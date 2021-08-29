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

        const next = res.data?.reduce(
            (memo, { course_id: id, data }) => ({
                ...memo,
                [id]: JSON.parse(data)
            }),
            {}
        );

        setCourses(next);
    }, []);

    const save = (id, data) =>
        fetch(`/courses/${id}.json`, {
            method: 'PATCH',
            body: { course: { data: JSON.stringify(data) } }
        });

    const updateCourse = useCallback(
        (id, field, payload) => {
            const course = { ...(courses[id] || {}) };

            switch (field) {
                case 'pos': {
                    const { chapter, top } = payload;
                    if (course.pos?.chapter === chapter && course.pos?.top === top) return;
                    course.pos = { chapter, top };
                    save(id, course);
                    break;
                }

                case 'quiz':
                    course.quizzes = course.quizzes || {};
                    course.quizzes[payload.id] = payload.answers;
                    save(id, course);
                    break;

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
