import { useCallback } from 'react';
import { useApp } from '../../tools';

export const useLocale = () => {
    const { profile } = useApp(),
        bookId = profile?.last_course_id;

    const choose = useCallback(options => options[bookId], [bookId]);

    return { choose };
};
