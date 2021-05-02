import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import a from './animation.css';
import s from './page.css';

const Page = ({ pos, pointer, settings, animation, children, ...props }) => {
    const [ready, setReady] = useState(pos === 0);

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 20);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={classNames(s.screen, s[settings.emergence], a.box, a[animation], {
                [a.current]: ready && pos === pointer,
                [a.prev]: pos === pointer - 1,
                [s.tabs]: settings.tabs
            })}
            data-control={props['data-control']}
        >
            {children}
        </div>
    );
};

Page.propTypes = {
    pos: pt.number.isRequired,
    pointer: pt.number.isRequired,
    settings: pt.object,
    animation: pt.string,
    'data-control': pt.string
};

Page.defaultProps = {
    settings: undefined,
    animation: undefined,
    'data-control': undefined
};

export default Page;
