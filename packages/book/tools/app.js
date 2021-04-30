import { createContext, useContext } from 'react';

export const app = createContext({
    profile: null,
    updateProfile: () => {},
    courses: {},
    updateCourse: () => {}
});

export function useApp() {
    return useContext(app);
}
