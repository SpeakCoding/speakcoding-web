import { useEffect } from 'react';

function useKeyPress(keys = [], onKeyPress) {
    useEffect(() => {
        const handleKeyDown = event => {
            const { keyCode } = event;

            if (keys.includes(keyCode)) onKeyPress(event);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [keys, onKeyPress]);
}

export default useKeyPress;
