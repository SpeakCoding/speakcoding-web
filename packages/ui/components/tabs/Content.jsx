import React, { useContext, useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { context } from './utils';
import s from './tabs.css';

const timeout = 200;

const Content = ({ tab, children }) => {
    const { tab: selected } = useContext(context),
        [phase, setPhase] = useState('exited');

    useEffect(() => {
        let timer;

        if (tab === selected) {
            timer = setTimeout(() => {
                setPhase('entering');
                timer = setTimeout(() => setPhase('entered'), 20);
            }, timeout);
        } else {
            if (phase === 'exited') return undefined;
            setPhase('exiting');
            timer = setTimeout(() => setPhase('exited'), timeout);
        }

        return () => clearTimeout(timer);
    }, [tab, selected]);

    if (phase === 'exited') return null;

    return <div className={classNames(s.content, s[phase])}>{children}</div>;
};

Content.propTypes = {
    tab: pt.string.isRequired
};

export default Content;
