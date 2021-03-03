import { useContext, useEffect } from 'react';
import pt from 'prop-types';
import { context } from './utils';

const Screen = ({ name, children }) => {
    const { register } = useContext(context);

    useEffect(() => {
        register(name, children);
    }, []);

    return null;
};

Screen.propTypes = {
    name: pt.string.isRequired
};

export default Screen;
