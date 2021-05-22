import { createContext, useContext } from 'react';

export const slide = createContext(0);

export function useSlide() {
    return useContext(slide);
}
