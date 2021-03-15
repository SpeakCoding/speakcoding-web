import { useContext, useEffect } from 'react';
import pt from 'prop-types';
import { context } from './utils';

const Screen = ({ name, component, view }) => {
    const { register } = useContext(context);

    useEffect(() => {
        register(name, component, view);
    }, []);

    return null;
};

Screen.propTypes = {
    name: pt.string.isRequired,
    component: pt.func.isRequired,
    view: pt.oneOf(['default', 'modal'])
};

Screen.defaultProps = {
    view: 'default'
};

export default Screen;
