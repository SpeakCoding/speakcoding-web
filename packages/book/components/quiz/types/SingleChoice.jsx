import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Radio } from '@sc/ui';
import Assets from '../blocks/Assets';
import Comment from '../blocks/Comment';
import s from './types.css';

const SingleChoice = ({ answer, comment, options, title, onChange, ...props }) => {
    const [state, setState] = useState(answer);

    const handleChange = i => () => {
        setState(i);
        onChange(i);
    };

    useEffect(() => {
        setState(answer);
    }, [answer, options]);

    return (
        <>
            <h3 className={s.label}>{title}</h3>

            <Assets {...props} />

            {options.map((option, i) => (
                <label
                    key={option.title}
                    className={classNames(s.option, {
                        [s.selected]: i === state,
                        [s.disabled]: answer !== undefined,
                        [s.correct]: answer !== undefined && option.correct
                    })}
                >
                    <Radio
                        disabled={answer !== undefined}
                        name={title}
                        value={i === answer}
                        onChange={handleChange(i)}
                    />
                    <div>{option.title}</div>
                </label>
            ))}

            {answer !== undefined && <Comment>{comment}</Comment>}
        </>
    );
};

SingleChoice.propTypes = {
    answer: pt.number,
    comment: pt.string,
    options: pt.array,
    title: pt.string,
    onChange: pt.func
};

SingleChoice.defaultProps = {
    answer: undefined,
    comment: undefined,
    options: [],
    title: undefined,
    onChange: () => {}
};

export default SingleChoice;
