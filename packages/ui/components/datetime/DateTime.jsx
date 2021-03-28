import pt from 'prop-types';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

const msInMin = 60 * 1000;

const DateTime = ({ format, relative, value }) => {
    if (relative === true) return dayjs().to(value);

    if (relative) {
        const diff = Math.abs(Date.now() - value);
        if (diff < msInMin) return 'Just now';
        if (diff <= relative) return dayjs().to(value);
    }

    return dayjs(value).format(format);
};

DateTime.propTypes = {
    format: pt.string.isRequired,
    relative: pt.oneOfType([pt.bool, pt.number]),
    value: pt.number.isRequired
};

DateTime.defaultProps = {
    relative: false
};

export default DateTime;
