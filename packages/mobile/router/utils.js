import { createContext, useContext, useReducer } from 'react';

export const context = createContext({
    register: () => {}
});

export const router = createContext({
    tab: undefined,
    route: {},
    prevRoute: null,
    focused: false,
    navigate: () => {},
    goBack: () => {},
    switchTab: () => {}
});

export function useRouter() {
    return useContext(router);
}

function createRoute(name, params = {}) {
    return {
        key: Math.random(),
        name,
        params
    };
}

function createTab(screen, params = {}) {
    return {
        history: [createRoute(screen, params)],
        pointer: 0
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'screen':
            return {
                ...state,
                screens: {
                    ...state.screens,
                    [action.options.name]: action.options
                }
            };

        case 'push': {
            const tab = state.tabs[state.tab];

            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [state.tab]: {
                        history: [
                            ...tab.history.slice(0, tab.pointer + 1),
                            createRoute(action.name, action.params)
                        ],
                        pointer: tab.pointer + 1
                    }
                }
            };
        }

        case 'back': {
            const tab = state.tabs[state.tab];

            if (tab.pointer === 0) return state;

            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [state.tab]: { ...tab, pointer: tab.pointer - 1 }
                }
            };
        }

        case 'tab': {
            const next = { ...state, tab: action.tab };

            if (!state.tabs[action.tab])
                next.tabs = {
                    ...state.tabs,
                    [action.tab]: createTab(action.options.screen, action.options.params)
                };

            return next;
        }

        default:
    }

    return state;
}

export function useRouterState(initialScreen, initialScreenParams, initialTab) {
    const initialState = {
        screens: {},
        tabs: { [initialTab]: createTab(initialScreen, initialScreenParams) },
        tab: initialTab
    };

    return useReducer(reducer, initialState);
}
