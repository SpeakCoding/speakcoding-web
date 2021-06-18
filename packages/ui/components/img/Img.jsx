import React from 'react';
import pt from 'prop-types';
import s from './img.css';

const Img = ({ src, ...props }) => (
    <img src={src} alt='' loading='lazy' className={s.box} {...props} />
);

Img.propTypes = {
    src: pt.string.isRequired
};

export default Img;
