import { createContext } from 'react';

export const context = createContext({
    tab: null,
    setTab: () => {}
});
