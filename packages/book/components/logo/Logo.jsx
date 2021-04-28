import React from 'react';
import pt from 'prop-types';
import logo from './logo.svg';

const Logo = ({ size }) => <img src={logo} width={size} height={size} alt='' />;

Logo.propTypes = {
    size: pt.number
};

Logo.defaultProps = {
    size: 44
};

export default Logo;
