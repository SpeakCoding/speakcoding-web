import { useContext, useEffect } from 'react';
import pt from 'prop-types';
import { context } from './utils';

const Screen = props => {
    const { register } = useContext(context);

    useEffect(() => {
        register(props);
    }, []);

    return null;
};

Screen.propTypes = {
    name: pt.string.isRequired,
    component: pt.func.isRequired,
    emergence: pt.oneOf(['slide', 'sheet', 'fade']),
    tabs: pt.bool
};

Screen.defaultProps = {
    emergence: 'slide',
    tabs: true
};

export default Screen;
