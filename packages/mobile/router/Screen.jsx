import { useContext, useEffect } from 'react';
import pt from 'prop-types';
import { context } from './utils';

const Screen = ({ name, component, view, tabs }) => {
    const { register } = useContext(context);

    useEffect(() => {
        register({ name, component, view, tabs });
    }, []);

    return null;
};

Screen.propTypes = {
    name: pt.string.isRequired,
    component: pt.func.isRequired,
    view: pt.oneOf(['default', 'modal']),
    tabs: pt.bool
};

Screen.defaultProps = {
    view: 'default',
    tabs: true
};

export default Screen;
