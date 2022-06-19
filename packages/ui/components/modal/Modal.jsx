import React, { useCallback, useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { keyCodes } from '@sc/tools/keycodes';
import Icon from '../icon';
import { useKeyPress, useTransitionState } from '../../hooks';
import { closingTimeout, modalRoot } from './utils';
import s from './modal.css';

const keys = [keyCodes.escape];

document.body.append(modalRoot);

const Modal = ({ closeTriggers, opened, children, onClose }) => {
    const [key, setKey] = useState(null),
        [state, close] = useTransitionState(opened, { duration: closingTimeout });

    const handleClose = async () => {
        if (state !== 'show') return;

        await close();
        onClose();
    };

    const handleClickOutside = useCallback(() => {
        if (closeTriggers.includes('click-outside')) handleClose();
    }, [closeTriggers, handleClose]);

    const handleClickCross = useCallback(() => {
        if (closeTriggers.includes('cross')) handleClose();
    }, [closeTriggers, handleClose]);

    const handleClickEsc = useCallback(() => {
        if (closeTriggers.includes('esc')) handleClose();
    }, [closeTriggers, handleClose]);

    useKeyPress(keys, handleClickEsc);

    useEffect(() => {
        if (opened) setKey(Math.random());
    }, [opened]);

    if (/init|idle/.test(state)) return null;

    return createPortal(
        <div
            className={classNames(s.container, {
                [s.in]: state === 'show',
                [s.out]: state === 'exit'
            })}
        >
            <div className={s.overlay} onClick={handleClickOutside} />

            <div key={key} className={s.content}>
                {children}
                <div className={s.close} onClick={handleClickCross}>
                    <Icon data-ui-role='close' name='times' size={24} />
                </div>
            </div>
        </div>,
        modalRoot
    );
};

Modal.propTypes = {
    closeTriggers: pt.array,
    opened: pt.bool,
    onClose: pt.func
};

Modal.defaultProps = {
    closeTriggers: ['click-outside', 'cross', 'esc'],
    opened: false,
    onClose: () => {}
};

export default Modal;
