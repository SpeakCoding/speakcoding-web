import React, { useCallback, useRef, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { useClickOutside } from '@sc/ui/hooks';
import { Icon } from '@sc/ui';
import L from '../localize';
import s from './select.css';

const Label = ({ value, lang }) => {
    if (lang === 'en')
        return (
            <>
                {value === 'extensive' && 'Original course'}
                {value === 'intensive' && 'Intensive course'}
            </>
        );

    return (
        <>
            {value === 'extensive' && (
                <>
                    <L book='en'>Original course</L>
                    <L book='ru'>Обычный</L>
                </>
            )}
            {value === 'intensive' && (
                <>
                    <L book='en'>Intensive course</L>
                    <L book='ru'>Интенсив</L>
                </>
            )}
        </>
    );
};
Label.propTypes = {
    lang: pt.string,
    value: pt.string.isRequired
};

Label.defaultProps = {
    lang: undefined
};

const CourseSelect = ({ lang, onChange }) => {
    const [opened, setOpened] = useState(false),
        [value, setValue] = useState('extensive'),
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

    return (
        <div ref={$ref} className={s.box}>
            <button
                className={s.control}
                type='button'
                onClick={() => setOpened(current => !current)}
            >
                <Label value={value} lang={lang} />
                <Icon name='chevron-up-down' size={32} />
            </button>

            <div className={classNames(s.options, opened && s.opened)}>
                <div
                    className={classNames(s.option, value === 'extensive' && s.selected)}
                    onClick={() => handleSelect('extensive')}
                >
                    <Label value='extensive' lang={lang} />
                </div>
                <div
                    className={classNames(s.option, value === 'intensive' && s.selected)}
                    onClick={() => handleSelect('intensive')}
                >
                    <Label value='intensive' lang={lang} />
                </div>
            </div>
        </div>
    );
};

CourseSelect.propTypes = {
    lang: pt.string,
    onChange: pt.func
};

CourseSelect.defaultProps = {
    lang: undefined,
    onChange: () => {}
};

export default CourseSelect;
