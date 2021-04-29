import pt from 'prop-types';
import { useApp } from '../../tools';

const Localize = ({ book, children }) => {
    const { profile } = useApp(),
        bookId = profile.last_course_id;

    if (bookId !== book) return null;

    return children;
};

Localize.protoTypes = {
    book: pt.oneOf(['en', 'ru']).isRequired
};

export default Localize;
