import React, { useCallback } from 'react';
import pt from 'prop-types';
import { debounce } from '@sc/tools/function';
import { Textarea } from '@sc/ui';
import { useLocale } from '../../../localize';
import quizzes from '../../../../quizzes';
import s from './types.css';

const TextInput = ({ answer, asset, comment, title, onChange }) => {
    const { choose } = useLocale(),
        Asset = quizzes.assets[asset];

    const handleChange = useCallback(
        debounce(value => {
            onChange(value || undefined);
        }, 300),
        [onChange]
    );

    return (
        <>
            <h2 className={s.label}>{title}</h2>

            {Asset && (
                <div className={s.asset}>
                    <Asset />
                </div>
            )}

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
    asset: pt.string,
    comment: pt.string,
    title: pt.string,
    onChange: pt.func
};

TextInput.defaultProps = {
    answer: undefined,
    asset: undefined,
    comment: undefined,
    title: undefined,
    onChange: () => {}
};

export default TextInput;
