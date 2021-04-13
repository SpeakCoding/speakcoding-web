import { useContext, useEffect } from 'react';
import { context } from './utils';

const Tooltip = ({ children }) => {
    const { setContent } = useContext(context);

    useEffect(() => {
        setContent(children);
    }, [children]);

    return null;
};

export default Tooltip;
