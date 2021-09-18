import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Checkbox } from '@sc/ui';
import Comment from './Comment';
import quizzes from '../../../quizzes';
import s from './types.css';

const MultipleChoice = ({ answer, asset, comment, options, title, onChange }) => {
    const [state, setState] = useState(Array(options.length).fill(false)),
        Asset = quizzes.assets[asset];

    const handleChange = i => checked => {
        const next = [...state];
        next[i] = checked;
        setState(next);
        const value = next.reduce((res, item, j) => {
            if (item) res.push(j);
            return res;
        }, []);
        onChange(value.length > 0 ? value : undefined);
    };

    useEffect(() => {
        if (Array.isArray(answer)) {
            const next = [...Array(options.length)].map((_, i) => answer.includes(i));
            setState(next);
        }
    }, [answer, options]);

    return (
        <>
            <h2 className={s.label}>{title}</h2>

            {Asset && (
                <div className={s.asset}>
                    <Asset />
                </div>
            )}

            {options.map((option, i) => (
                <label
                    key={option.title}
                    className={classNames(s.option, {
                        [s.selected]: state[i],
                        [s.disabled]: !!answer,
                        [s.correct]: !!answer && option.correct
                    })}
                >
                    <Checkbox
                        disabled={!!answer}
                        value={answer ? answer.includes(i) : false}
                        onChange={handleChange(i)}
                    />
                    <div>{option.title}</div>
                </label>
            ))}

            {!!answer && <Comment>{comment}</Comment>}
        </>
    );
};

MultipleChoice.propTypes = {
    answer: pt.array,
    asset: pt.string,
    comment: pt.string,
    options: pt.array,
    title: pt.string,
    onChange: pt.func
};

MultipleChoice.defaultProps = {
    answer: undefined,
    asset: undefined,
    comment: undefined,
    options: [],
    title: undefined,
    onChange: () => {}
};

export default MultipleChoice;
