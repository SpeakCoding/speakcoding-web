import { createContext, useContext } from 'react';

export const app = createContext({
    profile: null,
    setProfile: () => {},
    reset: () => {}
});

export function useApp() {
    return useContext(app);
}
