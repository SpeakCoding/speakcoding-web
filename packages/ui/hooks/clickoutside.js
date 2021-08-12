import { useEffect } from 'react';

function useClickOutside(ref, onClickOutside) {
    useEffect(() => {
        const handleClick = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside(event);
            }
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('touchstart', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('touchstart', handleClick);
        };
    }, [ref, onClickOutside]);
}

export default useClickOutside;
