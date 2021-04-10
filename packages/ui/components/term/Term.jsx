/* eslint-disable import/order */
import React, { useMemo, useState } from 'react';
import { context } from './utils';
import s from './term.css';

// Tippy
import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale.css';

const Term = ({ children }) => {
    const [content, setContent] = useState(''),
        value = useMemo(() => ({ setContent }), []);

    return (
        <Tippy animation='scale' arrow={roundArrow} content={content} interactive>
            <span className={s.word}>
                <context.Provider value={value}>{children}</context.Provider>
            </span>
        </Tippy>
    );
};

export default Term;
