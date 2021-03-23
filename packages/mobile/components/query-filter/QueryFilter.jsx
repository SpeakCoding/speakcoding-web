import React, { useCallback } from 'react';
import pt from 'prop-types';
import { debounce } from '@sc/tools/function';
import { Button, TextInput } from '@sc/ui/mobile';
import s from './query-filter.css';

const QueryFilter = ({ placeholder, onCancel, onChange }) => {
    const handleChange = useCallback(debounce(onChange, 300), [onChange]);

    return (
        <div className={s.box}>
            <TextInput
                icon='m/search'
                placeholder={placeholder}
                variant='ios'
                onChange={handleChange}
            />
            {!!onCancel && (
                <div className={s.cancel}>
                    <Button variant='text' onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            )}
        </div>
    );
};

QueryFilter.propTypes = {
    placeholder: pt.string,
    onCancel: pt.func,
    onChange: pt.func
};

QueryFilter.defaultProps = {
    placeholder: '',
    onCancel: undefined,
    onChange: () => {}
};

export default QueryFilter;
