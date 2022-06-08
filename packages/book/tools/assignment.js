import { useMemo } from 'react';
import assignments from '../assignments';
import { useApp } from './app';

export function useAssignment(id) {
    const [courseID, assignmentID] = useMemo(() => id.split('/'), [id]),
        assignment = assignments[courseID]?.[assignmentID],
        { courses, admin } = useApp(),
        answers = courses[courseID]?.assignments?.[assignmentID] || [];

    if (!admin) assignment.review = undefined;

    return useMemo(
        () => ({
            courseID,
            assignmentID,
            assignment,
            answers
        }),
        [courseID, assignmentID, answers]
    );
}
