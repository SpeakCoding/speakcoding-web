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

    const navigate = useCallback((name, params) => dispatch({ type: 'push', name, params }), []),
        goBack = useCallback(() => dispatch({ type: 'back' }), []),
        register = useCallback(
            (name, component, view) => dispatch({ type: 'screen', name, component, view }),
            []
        ),
        switchTab = useCallback(
            (tab, screen, params) => dispatch({ type: 'tab', tab, screen, params }),
            []
        );

    const value = useMemo(() => ({ register }), []);

    return (
        <context.Provider value={value}>
            <div className={s.display}>
                {tabs.map(({ name, history, pointer }) => (
                    <div key={name} className={classNames(s.tab, name !== state.tab && s.hidden)}>
                        {history.map((item, i) => {
                            const { Content, view } = state.screens[item.name] || {},
                                pageContext = {
                                    tab: state.tab,
                                    route: item,
                                    navigate,
                                    goBack,
                                    switchTab
                                };

                            const active = history[Math.min(pointer + 1, history.length - 1)],
                                { view: animation } = state.screens[active.name] || {};

                            return (
                                <router.Provider key={item.key} value={pageContext}>
                                    <Page
                                        pos={i}
                                        pointer={pointer}
                                        view={view}
                                        animation={animation}
                                    >
                                        {Content && <Content />}
                                    </Page>
                                </router.Provider>
                            );
                        })}
                    </div>
                ))}
                <Tabs tab={state.tab} switchTab={switchTab} />
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
