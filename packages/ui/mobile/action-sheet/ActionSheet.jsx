import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import pt from 'prop-types';
import classNames from 'classnames';
import { context } from './utils';
import s from './action-sheet.css';

const $root = document.createElement('div');
$root.classList.add(s.root);
let ready = false;

const ActionSheet = ({ opened, children, onClose }) => {
    const value = useMemo(() => ({ close: onClose }), [onClose]);

    useEffect(() => {
        if (!ready) {
            document.getElementById('mobile-layout').append($root);
            ready = true;
        }
    }, []);

    return createPortal(
        <>
            <div className={classNames(s.overlay, opened && s.opened)} onClick={onClose} />
            <div className={classNames(s.box, opened && s.opened)}>
                <div className={s.section}>
                    <context.Provider value={value}>{children}</context.Provider>
                </div>
                <div className={s.section}>
                    <div className={s.item} onClick={onClose}>
                        Cancel
                    </div>
                </div>
            </div>
        </>,
        $root
    );
};

ActionSheet.propTypes = {
    opened: pt.bool,
    onClose: pt.func
};

ActionSheet.defaultProps = {
    opened: false,
    onClose: () => {}
};

export default ActionSheet;
