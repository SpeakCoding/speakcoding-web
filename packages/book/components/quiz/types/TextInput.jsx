import React, { useCallback } from 'react';
import pt from 'prop-types';
import { debounce } from '@sc/tools/function';
import { Textarea } from '@sc/ui';
import { useLocale } from '../../localize';
import Assets from '../blocks/Assets';
import Comment from '../blocks/Comment';
import s from './types.css';

const TextInput = ({ answer, comment, title, onChange, ...props }) => {
    const { choose } = useLocale();

    const handleChange = useCallback(
        debounce(value => {
            onChange(value || undefined);
        }, 300),
        [onChange]
    );

    return (
        <>
            <h3 className={s.label}>{title}</h3>

            <Assets {...props} />

            <Textarea
                autoheight
                placeholder={choose({ en: 'Your answer', ru: 'Ваш ответ' })}
                readonly={!!answer}
                rows={1}
                value={answer}
                onChange={handleChange}
            />

            {answer !== undefined && <Comment>{comment}</Comment>}
        </>
    );
};

TextInput.propTypes = {
    answer: pt.string,
    comment: pt.string,
    title: pt.string,
    onChange: pt.func
};

TextInput.defaultProps = {
    answer: undefined,
    comment: undefined,
    title: undefined,
    onChange: () => {}
};

export default TextInput;
