import { createContext, useContext } from 'react';

export const app = createContext({
    reset: () => {}
});

export function useApp() {
    return useContext(app);
}
