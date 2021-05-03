import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import Phone from './Phone';
import s from './phone.css';

const Container = () => {
    const [opened, setOpened] = useState(false),
        [key, setKey] = useState(1);

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    useEffect(() => {
        const handler = event => {
            const { type } = event.detail;

            switch (type) {
                case 'session-set':
                case 'logout':
                    setKey(Math.random());
                    break;
                case 'open':
                    setOpened(true);
                    break;
                case 'close':
                    setOpened(false);
                    break;
                default:
            }
        };

        document.addEventListener('sc-phone-event', handler);

        return () => {
            document.removeEventListener('sc-phone-event', handler);
        };
    }, []);

    return (
        <>
            <div className={classNames(s.trigger, opened && s.opened)} onClick={open} />
            <Phone key={key} opened={opened} close={close} />
        </>
    );
};

export default Container;
