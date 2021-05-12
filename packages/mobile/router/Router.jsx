import React, { useCallback, useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { context, router, useRouterState } from './utils';
import Page from './page';
import Tabs from './tabs';
import s from './router.css';

const Router = ({ initialScreen, initialScreenParams, initialTab, children }) => {
    const [state, dispatch] = useRouterState(initialScreen, initialScreenParams, initialTab),
        tabs = useMemo(() => Object.keys(state.tabs).map(name => ({ ...state.tabs[name], name })), [
            state.tabs
        ]);

    const screen = useMemo(() => {
        const { pointer, history } = state.tabs[state.tab],
            { key, name } = history[pointer] || {};

        return { key, ...state.screens[name] };
    }, [state]);

    const navigate = useCallback((name, params) => dispatch({ type: 'push', name, params }), []),
        goBack = useCallback(() => dispatch({ type: 'back' }), []),
        register = useCallback(options => dispatch({ type: 'screen', options }), []),
        switchTab = useCallback((tab, options) => dispatch({ type: 'tab', tab, options }), []);

    const value = useMemo(() => ({ register }), []);

    return (
        <context.Provider value={value}>
            <div className={s.display} data-control='display'>
                {tabs.map(({ name, history, pointer }) => (
                    <div key={name} className={classNames(s.tab, name !== state.tab && s.hidden)}>
                        {history.map((item, i) => {
                            const { component: Component, ...settings } =
                                state.screens[item.name] || {};

                            const pageContext = {
                                tab: state.tab,
                                route: item,
                                prevRoute: history[i - 1],
                                focused: item.key === screen.key,
                                navigate,
                                goBack,
                                switchTab
                            };

                            const active = history[Math.min(pointer + 1, history.length - 1)],
                                { emergence: animation } = state.screens[active.name] || {};

                            const control =
                                i === pointer && name === state.tab ? 'screen' : undefined;

                            return (
                                <router.Provider key={item.key} value={pageContext}>
                                    <Page
                                        pos={i}
                                        pointer={pointer}
                                        settings={settings}
                                        animation={animation}
                                        data-control={control}
                                    >
                                        {Component && <Component />}
                                    </Page>
                                </router.Provider>
                            );
                        })}
                    </div>
                ))}
                {screen.tabs !== undefined && (
                    <Tabs
                        tab={state.tab}
                        hidden={!screen.tabs}
                        switchTab={switchTab}
                        navigate={navigate}
                    />
                )}
            </div>
            {children}
        </context.Provider>
    );
};

Router.propTypes = {
    initialScreen: pt.string.isRequired,
    initialScreenParams: pt.object,
    initialTab: pt.string
};

Router.defaultProps = {
    initialScreenParams: {},
    initialTab: 'main'
};

export default Router;
