import React, { useEffect, useMemo, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { router } from './utils';
import s from './router.css';

const Page = ({ pos, current, route, navigate, goBack, children }) => {
    const value = useMemo(() => ({ route, navigate, goBack }), []),
        [ready, setReady] = useState(pos === 0);

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 20);
        return () => clearTimeout(timer);
    }, []);

    return (
        <router.Provider value={value}>
            <div
                className={classNames(s.screen, {
                    [s.current]: ready && pos === current,
                    [s.prev]: pos === current - 1
                })}
            >
                {children}
            </div>
        </router.Provider>
    );
};

Page.propTypes = {
    pos: pt.number.isRequired,
    current: pt.number.isRequired,
    route: pt.object.isRequired,
    navigate: pt.func.isRequired,
    goBack: pt.func.isRequired
};

export default Page;
