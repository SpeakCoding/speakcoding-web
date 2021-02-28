import React from 'react';
import pt from 'prop-types';
import s from './icon.css';

const req = require.context('./glyphs'),
    icons = {},
    ids = [];

req.keys().forEach(filename => {
    const { id, viewBox } = req(filename).default;

    ids.push(id);
    icons[id] = { viewBox };
});

const mobile = require.context('../../mobile/icon/glyphs');

mobile.keys().forEach(filename => {
    const { id, viewBox } = mobile(filename).default;

    ids.push(id);
    icons[id] = { viewBox };
});

console.log(icons);

const Icon = ({ name, size }) => {
    if (!icons[name]) return null;

    return (
        <i
            className={s.container}
            style={{
                fontSize: size && `${size}px`
            }}
        >
            <svg width={size} height={size} className={s.svg} viewBox={icons[name].viewBox}>
                <use xlinkHref={`#${name}`} />
            </svg>
        </i>
    );
};

Icon.propTypes = {
    name: pt.string.isRequired,
    size: pt.number
};

Icon.defaultProps = {
    size: 24
};

Icon.ids = ids;

export default Icon;
