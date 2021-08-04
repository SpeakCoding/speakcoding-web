import { useCallback, useEffect, useMemo, useState } from 'react';
import useSafeTimeout from './safetimeout';

const appearDelay = 40;

function useTransitionState(opened, options) {
    const [state, setState] = useState('init'),
        { duration = 0 } = useMemo(() => options || {}, [options]),
        setSafeTimeout = useSafeTimeout();

    const close = useCallback(() => {
        if (!/appear|show/.test(state)) return undefined;

        return new Promise(resolve => {
            setState('exit');
            setSafeTimeout(() => {
                setState('idle');
                resolve();
            }, duration);
        });
    }, [opened, state]);

    useEffect(() => {
        if (opened && /init|idle/.test(state)) {
            setState('appear');
            setSafeTimeout(() => setState('show'), appearDelay);
        }

        if (!opened) close();
    }, [opened]);

    return [state, close];
}

export default useTransitionState;
