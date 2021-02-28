import React, { useMemo, useRef, useState } from 'react';
import pt from 'prop-types';
import { router } from './utils';

const Router = ({ initialScreen, children }) => {
    const [route, setRoute] = useState({ name: initialScreen }),
        history = useRef([route]);

    const navigate = (name, params = {}) => {
        history.current.push({ name, params });
        setRoute({ name, params });
    };

    const context = useMemo(
        () => ({
            route,
            navigate,
            goBack: () => {
                const prev = history.current[history.current.length - 2];

                if (prev) {
                    history.current = history.current.slice(0, -2);
                    navigate(prev.name, prev.params);
                }
            }
        }),
        [route]
    );

    return <router.Provider value={context}>{children}</router.Provider>;
};

Router.propTypes = {
    initialScreen: pt.string.isRequired
};

export default Router;
