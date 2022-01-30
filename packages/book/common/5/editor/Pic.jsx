import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Img } from '@sc/ui';
import s from './editor.css';

const Pic = ({ minimized, src, children }) => (
    <>
        <div className={s.placeholder}>
            <Img src={src} />
        </div>
        <div
            className={classNames(s.pic, minimized && s.minimized)}
            style={{
                '--editor-bg': `url(${src})`
            }}
        >
            <Img src={src} />
            {children}
        </div>
    </>
);

Pic.propTypes = {
    minimized: pt.bool,
    src: pt.string.isRequired
};

Pic.defaultProps = {
    minimized: false
};

export default Pic;
