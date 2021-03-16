import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import a from './animation.css';
import s from './page.css';

const Page = ({ pos, pointer, view, animation, children }) => {
    const [ready, setReady] = useState(pos === 0);

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 20);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={classNames(s.screen, s[view], a.box, a[animation], {
                [a.current]: ready && pos === pointer,
                [a.prev]: pos === pointer - 1
            })}
        >
            {children}
        </div>
    );
};

Page.propTypes = {
    pos: pt.number.isRequired,
    pointer: pt.number.isRequired,
    view: pt.string,
    animation: pt.string
};

Page.defaultProps = {
    view: undefined,
    animation: undefined
};

export default Page;
