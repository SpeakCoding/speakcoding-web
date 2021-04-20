import React from 'react';
import pt from 'prop-types';

const Img = ({ src, ...props }) => <img src={src} alt='' loading='lazy' {...props} />;

Img.propTypes = {
    src: pt.string.isRequired
};

export default Img;
