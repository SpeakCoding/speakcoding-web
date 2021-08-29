import React, { useCallback } from 'react';
import pt from 'prop-types';
import { debounce } from '@sc/tools/function';
import { Textarea } from '@sc/ui';
import { useLocale } from '../../../localize';
import s from './types.css';

const TextInput = ({ answer, comment, title, onChange }) => {
    const { choose } = useLocale();

    const handleChange = useCallback(
        debounce(value => {
            onChange(value || undefined);
        }, 300),
        [onChange]
    );

    return (
        <>
            <h2 className={s.label}>{title}</h2>

            <Textarea
                placeholder={choose({
                    en: 'Your answer...',
                    ru: 'Ваш ответ...'
                })}
                readonly={!!answer}
                value={answer}
                onChange={handleChange}
            />

            {answer !== undefined && <div className={s.comment}>{comment}</div>}
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
