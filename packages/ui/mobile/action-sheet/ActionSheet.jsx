import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import pt from 'prop-types';
import classNames from 'classnames';
import { context } from './utils';
import s from './action-sheet.css';

const $root = document.createElement('div');
$root.classList.add(s.root);
let rootReady = false;

const ActionSheet = ({ opened, children, onClose }) => {
    const value = useMemo(() => ({ close: onClose }), [onClose]),
        [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!rootReady) {
            document.getElementById('mobile-layout').append($root);
            rootReady = true;
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(opened), opened ? 40 : 400);

        return () => {
            clearTimeout(timer);
        };
    }, [opened]);

    if (!opened && !mounted) return null;

    return createPortal(
        <>
            <div
                className={classNames(s.overlay, opened && mounted && s.opened)}
                onClick={onClose}
            />
            <div className={classNames(s.box, opened && mounted && s.opened)}>
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
