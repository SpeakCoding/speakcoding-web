import { createContext } from 'react';

export const context = createContext({
    expanded: undefined,
    setExpanded: () => {}
});

export const item = createContext({
    name: undefined,
    expanded: undefined
});
