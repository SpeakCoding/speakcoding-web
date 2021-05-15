import { createContext } from 'react';

export const state = createContext({
    type: undefined,
    part: 1,
    intersecting: false
});
