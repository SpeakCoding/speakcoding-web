import { createContext, useContext } from 'react';

export const router = createContext({
    route: {},
    navigate: () => {},
    goBack: () => {}
});

export function useRouter() {
    return useContext(router);
}
