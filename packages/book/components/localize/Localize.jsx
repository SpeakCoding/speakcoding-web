import pt from 'prop-types';

const Localize = ({ lang, children }) => (localStorage.getItem('lang') === lang ? children : null);

Localize.protoTypes = {
    lang: pt.oneOf(['en', 'ru']).isRequired
};

export default Localize;
