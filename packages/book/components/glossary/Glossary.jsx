import React, { useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './glossary.css';

const Glossary = ({ data }) => {
    const ordered = useMemo(
        () =>
            Object.values(data).sort((a, b) => {
                const nameA = a.name.replace(/[^a-zа-яё\s]/gi, ''),
                    nameB = b.name.replace(/[^a-zа-яё\s]/gi, '');

                return nameA.localeCompare(nameB);
            }),
        [data]
    );

    return (
        <>
            {ordered.map(({ id, name, Definition, Additional }, i) => (
                <div key={id} className={classNames(s.item, i === 0 && s.first)}>
                    <div id={id} className={s.anchor} />
                    <p>
                        <b>
                            <i>{name}</i>
                        </b>{' '}
                        - <Definition />
                    </p>
                    {Additional && <Additional />}
                </div>
            ))}
        </>
    );
};

Glossary.propTypes = {
    data: pt.object.isRequired
};

export default Glossary;
