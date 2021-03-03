import { createContext, useContext } from 'react';

export const context = createContext({
    register: () => {}
});

export const router = createContext({
    route: {},
    navigate: () => {},
    goBack: () => {}
});

export function useRouter() {
    return useContext(router);
}
