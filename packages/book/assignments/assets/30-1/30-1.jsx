import React, { startTransition, useState } from 'react';
import pt from 'prop-types';
import { lines } from './code';
import Line from './Line';
import s from './30-1.css';

const getKey = (code, i) => `${i}-${code}`;

const Asset = ({ answer, onChange }) => {
    const initial = answer || lines.map(() => ''),
        [values, setValues] = useState(initial);

    const handleChange = k => value => {
        const nextAnswer = values.map((item, i) => (i === k ? value : item));
        onChange(nextAnswer);
        startTransition(() => {
            setValues(nextAnswer);
        });
    };

    return (
        <div className={s.list}>
            {lines.map((line, i) => (
                <Line
                    key={getKey(line, i)}
                    code={line}
                    answer={values[i]}
                    onChange={handleChange(i)}
                />
            ))}
        </div>
    );
};

Asset.propTypes = {
    answer: pt.array,
    onChange: pt.func
};

Asset.defaultProps = {
    answer: undefined,
    onChange: () => {}
};

export default Asset;
