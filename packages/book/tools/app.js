import { createContext, useContext } from 'react';

export const app = createContext({
    profile: null
});

export function useApp() {
    return useContext(app);
}
