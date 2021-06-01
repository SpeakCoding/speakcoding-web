import React from 'react';
import pt from 'prop-types';
import { HL } from '@sc/ui';

const colorsMap = {
    red: 'post-userpic',
    plum: 'post-name',
    'green-yellow': 'post-date',
    aquamarine: 'post-image',
    'steel-blue': 'post-likes',
    grey: 'post-caption',
    orange: 'post-comments',
    'sandy-brown': 'post-like',
    turquoise: 'post-comment',
    wheat: 'post-save'
};

const HLCustom = ({ c, children }) => (
    <HL color={c} label={colorsMap[c]}>
        {children}
    </HL>
);

HLCustom.propTypes = {
    c: pt.string.isRequired
};

export default HLCustom;
