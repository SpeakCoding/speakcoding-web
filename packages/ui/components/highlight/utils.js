import { createContext } from 'react';

export const shape = createContext({
    scale: 1,
    refresh: 0
});

export const hl = createContext({
    active: false,
    inline: undefined
});
