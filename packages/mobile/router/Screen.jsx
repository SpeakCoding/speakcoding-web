import pt from 'prop-types';
import { useRouter } from './utils';

const Screen = ({ name, children }) => {
    const { route } = useRouter();

    return name === route.name ? children : null;
};

Screen.propTypes = {
    name: pt.string.isRequired
};

export default Screen;
