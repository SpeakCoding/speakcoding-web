import { useMemo } from 'react';
import assignments from '../assignments';
import { useApp } from './app';

export function useAssignment(id) {
    const [courseID, assignmentID] = useMemo(() => id.split('/'), [id]),
        assignment = assignments[courseID]?.[assignmentID],
        { courses } = useApp(),
        answers = courses[courseID]?.assignments?.[assignmentID] || [];

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
