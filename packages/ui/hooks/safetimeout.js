import { useEffect, useRef } from 'react';

const clearTimeouts = timers => timers.forEach(timer => clearTimeout(timer));

function useSafeTimeout() {
    const timers = useRef([]);

    useEffect(
        () => () => {
            clearTimeouts(timers.current);
        },
        []
    );

    return (handler, timeout) => {
        const timer = setTimeout(() => {
            timers.current = timers.current.filter(item => item !== timer);
            handler();
        }, timeout);

        timers.current.push(timer);
    };
}

export default useSafeTimeout;
