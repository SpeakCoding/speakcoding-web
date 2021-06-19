/* eslint-disable react/no-array-index-key */
import React, { Fragment, useMemo } from 'react';
import pt from 'prop-types';
import HL from '../highlight';
import s from './code.css';

function parseCode(code) {
    return code
        .replace(/^[ \n]+|[ \n]+$/g, '')
        .split('\n')
        .map(line => {
            const re =
                /\[\[(?<text>.+?)\]\]\((?<color>.+?)( (?<label>.+?))?( (?<active>.+?))?( (?<inline>.+?))?\)/g;

            const parts = [];

            let match = re.exec(line),
                i = 0;

            while (match) {
                parts.push(line.substring(i, match.index));
                parts.push(match.groups);
                i = re.lastIndex;
                match = re.exec(line);
            }

            parts.push(line.substring(i) || ' ');

            return parts;
        });
}

const Code = ({ value, tabs }) => {
    const parsed = useMemo(() => parseCode(value), [value]);

    return (
        <>
            {parsed.map((parts, i) => (
                <pre key={i}>
                    {parts.map((item, j) => {
                        if (tabs && j === 0 && typeof item === 'string') {
                            const [, spaces, codeline] = /^(\s*)(.*)$/.exec(item);

                            if (spaces.length > 0) {
                                const blocks = spaces.match(/.{1,4}/g);
                                return (
                                    <Fragment key={j}>
                                        {blocks.map((block, k) => (
                                            <span key={k} className={s.tab}>
                                                {block}
                                            </span>
                                        ))}
                                        {codeline}
                                    </Fragment>
                                );
                            }
                        }

                        if (typeof item === 'string') return <Fragment key={j}>{item}</Fragment>;

                        return (
                            <HL
                                key={j}
                                color={item.color}
                                label={item.label}
                                active={!!parseInt(item.active, 10)}
                                inline={item.inline && parseInt(item.inline, 10)}
                            >
                                {item.text}
                            </HL>
                        );
                    })}
                </pre>
            ))}
        </>
    );
};

Code.propTypes = {
    tabs: pt.bool,
    value: pt.string.isRequired
};

Code.defaultProps = {
    tabs: false
};

export default Code;
