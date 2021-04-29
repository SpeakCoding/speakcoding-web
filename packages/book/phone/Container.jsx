import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import Phone from './Phone';
import s from './phone.css';

const Container = () => {
    const [opened, setOpened] = useState(false);

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    return (
        <>
            <div className={classNames(s.trigger, opened && s.opened)} onClick={open} />
            <Phone opened={opened} close={close} />
        </>
    );
};

export default Container;
