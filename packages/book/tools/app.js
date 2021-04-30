import { createContext, useContext } from 'react';

export const app = createContext({
    profile: null,
    course: {},
    updateCourse: () => {}
});

export function useApp() {
    return useContext(app);
}
