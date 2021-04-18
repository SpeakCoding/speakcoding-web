/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import pt from 'prop-types';
import { HL } from '@sc/ui';

function parseCode(code) {
    return code
        .trim()
        .split('\n')
        .map(line => {
            const re = /\[\[(?<text>.+?)\]\]\((?<color>.+?) (?<label>.+?)\)/g,
                parts = [];

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

const Code = ({ value }) => {
    const parsed = useMemo(() => parseCode(value), [value]);

    return (
        <>
            {parsed.map((parts, i) => (
                <pre key={i}>
                    {parts.map((item, j) => {
                        if (typeof item === 'string') return <span key={j}>{item}</span>;

                        return (
                            <HL key={j} color={item.color} label={item.label}>
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
    value: pt.string.isRequired
};

export default Code;
