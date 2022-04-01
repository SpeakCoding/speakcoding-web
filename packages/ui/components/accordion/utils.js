import { createContext } from 'react';

export const context = createContext({
    expanded: undefined,
    setExpanded: () => {}
});
