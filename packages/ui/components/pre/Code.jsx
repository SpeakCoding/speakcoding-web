import React, { Fragment, useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import HL from '../highlight';
import Hint from '../hint';
import { parseCode } from './utils';
import s from './pre.css';

const Code = ({ children, theme, ...props }) => {
    const parsed = useMemo(() => parseCode(children), [children]);

    return (
        <pre className={classNames(s.pre, s[theme])}>
            {parsed.map(item => {
                const hint = props[item.params?.[0]];

                return (
                    <Fragment key={item.id}>
                        {!item.formatter && <span data-type={item.type}>{item.value}</span>}

                        {item.formatter === 'hl' && (
                            <HL color={item.params[0]} active>
                                {item.value}
                            </HL>
                        )}

                        {item.formatter === 'h' && (
                            <Hint>
                                {item.value}
                                <Hint.Tooltip>
                                    {typeof hint === 'function' ? hint() : hint}
                                </Hint.Tooltip>
                            </Hint>
                        )}
                    </Fragment>
                );
            })}
        </pre>
    );
};

Code.propTypes = {
    theme: pt.oneOf(['light', 'dark'])
};

Code.defaultProps = {
    theme: 'light'
};

export default Code;
