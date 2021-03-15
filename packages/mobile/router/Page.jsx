import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './router.css';

const Page = ({ pos, pointer, view, children }) => {
    const [ready, setReady] = useState(pos === 0);

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 20);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={classNames(s.screen, {
                [s.default]: view === 'default',
                [s.modal]: view === 'modal',
                [s.current]: ready && pos === pointer,
                [s.prev]: pos === pointer - 1
            })}
        >
            {children}
        </div>
    );
};

Page.propTypes = {
    pos: pt.number.isRequired,
    pointer: pt.number.isRequired,
    view: pt.string
};

Page.defaultProps = {
    view: undefined
};

export default Page;
