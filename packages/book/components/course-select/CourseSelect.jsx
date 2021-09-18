import React, { useCallback, useRef, useState } from 'react';
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
                <L lang='en'>Original course</L>
                <L lang='ru'>Обычный</L>
            </>
        )}
        {value === 'intensive' && (
            <>
                <L lang='en'>Intensive course</L>
                <L lang='ru'>Интенсив</L>
            </>
        )}
    </>
);

Label.propTypes = {
    value: pt.string.isRequired
};

const CourseSelect = ({ onChange }) => {
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
                <Label value={value} />
                <Icon name='chevron-up-down' size={32} />
            </button>

            <div className={classNames(s.options, opened && s.opened)}>
                <div
                    className={classNames(s.option, value === 'extensive' && s.selected)}
                    onClick={() => handleSelect('extensive')}
                >
                    <Label value='extensive' />
                </div>
                <div
                    className={classNames(s.option, value === 'intensive' && s.selected)}
                    onClick={() => handleSelect('intensive')}
                >
                    <Label value='intensive' />
                </div>
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
