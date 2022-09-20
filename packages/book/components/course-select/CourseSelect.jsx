import React, { useCallback, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { useClickOutside } from '@sc/ui/hooks';
import { Icon } from '@sc/ui';
import L from '../localize';
import s from './select.css';

const Label = ({ value }) => (
    <>
        {value === 'extensive' && (
            <>
                <L lang='en'>Extensive</L>
                <L lang='ru'>Экстенсив</L>
            </>
        )}
        {value === 'intensive' && (
            <>
                <L lang='en'>Intensive</L>
                <L lang='ru'>Интенсив</L>
            </>
        )}
        {value === 'automated' && (
            <>
                <L lang='en'>Automated</L>
                <L lang='ru'>Автоматический</L>
            </>
        )}
    </>
);

Label.propTypes = {
    value: pt.string.isRequired
};

const optionsByLang = {
    en: ['extensive', 'intensive', 'automated'],
    ru: ['intensive', 'automated']
};

const CourseSelect = ({ onChange }) => {
    const [opened, setOpened] = useState(false),
        lang = localStorage.getItem('lang'),
        [value, setValue] = useState(optionsByLang[lang]?.[0]),
        $ref = useRef();

    const handleSelect = useCallback(
        nextValue => {
            setValue(nextValue);
            setOpened(false);
            onChange(nextValue);
        },
        [onChange]
    );

    const handleClickOutside = useCallback(() => setOpened(false), []);

    useClickOutside($ref, handleClickOutside);

    useEffect(() => {
        onChange(value);
    }, []);

    return (
        <div ref={$ref} className={s.box}>
            <button
                className={s.control}
                type='button'
                onClick={() => setOpened(current => !current)}
            >
                <Label value={value} />
                <Icon name='chevron-up-down' size={32} />
            </button>

            <div className={classNames(s.options, opened && s.opened)}>
                {optionsByLang[lang]?.map(item => (
                    <div
                        key={item}
                        className={classNames(s.option, value === item && s.selected)}
                        onClick={() => handleSelect(item)}
                    >
                        <Label value={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

CourseSelect.propTypes = {
    onChange: pt.func
};

CourseSelect.defaultProps = {
    onChange: () => {}
};

export default CourseSelect;
