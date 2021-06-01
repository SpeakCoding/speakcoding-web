import React from 'react';
import { HL } from '@sc/ui';
import pt from 'prop-types';

const colorsMap = {
    red: 'post-create-preview',
    'green-yellow': 'post-create-caption',
    plum: 'post-create-location',
    aquamarine: 'post-create-tags',
    orange: 'post-create-share'
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
