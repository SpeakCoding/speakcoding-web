import { createContext } from 'react';

export const expanded = new Map();

export const context = createContext({
    expand: () => {}
});
