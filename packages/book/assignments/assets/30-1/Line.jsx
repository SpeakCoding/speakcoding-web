import React, { useCallback, useRef, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Icon, Pre, Textarea } from '@sc/ui';
import s from './30-1.css';

const Line = ({ answer, code, onChange }) => {
    const [expanded, setExpanded] = useState(false),
        $answer = useRef(),
        empty = code.trim().length === 0;

    const toggleExpanded = useCallback(() => {
        const nextValue = !expanded;
        setExpanded(nextValue);
        setTimeout(() => {
            if (nextValue) $answer.current.querySelector('textarea').focus();
        }, 100);
    }, [expanded]);

    return (
        <div className={s.item}>
            <div className={s.question}>
                <div className={s.code}>
                    <Pre.Code theme='dark'>{code}</Pre.Code>
                </div>
                {!empty && (
                    <div className={s.expand} onClick={toggleExpanded}>
                        {expanded && <Icon name='times' size={24} />}
                        {!expanded && <Icon name='plus' size={24} />}
                    </div>
                )}
            </div>
            <div className={classNames(s.wrapper, expanded && s.visible)}>
                <div ref={$answer} className={s.answer}>
                    <Textarea autoheight pure value={answer} onChange={onChange} />
                </div>
            </div>
        </div>
    );
};

Line.propTypes = {
    answer: pt.string,
    code: pt.string,
    onChange: pt.func
};

Line.defaultProps = {
    answer: '',
    code: '',
    onChange: () => {}
};

export default Line;
