import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import { context } from './utils';
import Page from './Page';
import s from './router.css';

const createRoute = (name, params = {}) => ({
    key: Math.random(),
    name,
    params
});

const Router = ({ initialScreen, children }) => {
    const [current, setCurrent] = useState(0),
        [screens, setScreens] = useState({}),
        [history, setHistory] = useState([createRoute(initialScreen)]);

    const navigate = useCallback((name, params) => {
        setHistory(data => [...data, createRoute(name, params)]);
        setCurrent(i => i + 1);
    }, []);

    const goBack = useCallback(() => {
        if (current === 0) return;
        setCurrent(i => i - 1);
        setTimeout(() => setHistory(data => data.slice(0, -1)), 400);
    }, [current]);

    const register = (name, content) => {
        setScreens(data => ({ ...data, [name]: () => content }));
    };

    const value = useMemo(() => ({ register }), []);

    return (
        <context.Provider value={value}>
            <div className={s.display}>
                {history.map((item, i) => {
                    const Content = screens[item.name];

                    return (
                        <Page
                            key={item.key}
                            pos={i}
                            current={current}
                            route={item}
                            navigate={navigate}
                            goBack={goBack}
                        >
                            {Content && <Content />}
                        </Page>
                    );
                })}
            </div>
            {children}
        </context.Provider>
    );
};

Router.propTypes = {
    initialScreen: pt.string.isRequired
};

export default Router;
