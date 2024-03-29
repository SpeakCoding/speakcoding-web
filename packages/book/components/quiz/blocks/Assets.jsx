import React, { useMemo } from 'react';
import pt from 'prop-types';
import { fixTabs } from '@sc/tools/code';
import { Code, HL, Img, Structure } from '@sc/ui';
import OpenNewTab from './OpenNewTab';
import s from './blocks.css';

const Assets = ({ code, img }) => {
    const formattedCode = useMemo(() => (code ? fixTabs(code) : null), [code]);

    if (!code && !img) return null;

    return (
        <div className={s.asset}>
            {formattedCode && (
                <Structure>
                    <HL.Context active>
                        <Code value={formattedCode} />
                    </HL.Context>
                </Structure>
            )}

            {img && (
                <OpenNewTab url={img}>
                    <Structure>
                        <Img src={img} />
                    </Structure>
                </OpenNewTab>
            )}
        </div>
    );
};

Assets.propTypes = {
    code: pt.string,
    img: pt.string
};

Assets.defaultProps = {
    code: undefined,
    img: undefined
};

export default Assets;
