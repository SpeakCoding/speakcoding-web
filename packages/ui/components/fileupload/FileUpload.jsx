import React, { useCallback, useRef } from 'react';
import pt from 'prop-types';

const FileUpload = ({ accept, children, onChange }) => {
    const $input = useRef(null);

    const handleClick = () => $input.current.click();

    const handleChange = useCallback(
        event => {
            if (!event.target.files) return;
            onChange([...event.target.files]);
        },
        [onChange]
    );

    return (
        <div onClick={handleClick}>
            <input accept={accept} hidden ref={$input} type='file' onChange={handleChange} />
            {children}
        </div>
    );
};

FileUpload.propTypes = {
    accept: pt.string,
    onChange: pt.func
};

FileUpload.defaultProps = {
    accept: undefined,
    onChange: () => {}
};

export default FileUpload;
