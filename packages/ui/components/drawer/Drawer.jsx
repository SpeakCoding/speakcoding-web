import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import pt from 'prop-types';
import classNames from 'classnames';
import { keyCodes } from '@sc/tools/keycodes';
import useKeyPress from '../../hooks/keypress';
import Icon from '../icon/Icon';
import s from './drawer.css';

const closingTimeout = 240,
    keys = [keyCodes.escape];

const drawerRoot = document.createElement('div');
drawerRoot.classList.add(s.root);

document.body.append(drawerRoot);

const Drawer = ({ opened, children, onClose }) => {
    const [state, setState] = useState('idle'),
        [key, setKey] = useState(null);

    const close = useCallback(() => {
        if (state !== 'show') return;
        setState('exit');
        setTimeout(onClose, closingTimeout);
    }, [state]);

    useEffect(() => {
        if (opened || state !== 'idle') setState(opened ? 'show' : 'exit');
        if (opened) setKey(Math.random());
    }, [opened]);

    useKeyPress(keys, close);

    return createPortal(
        <div className={classNames(s.container, state === 'show' && s.in)}>
            <div className={s.overlay} onClick={close} />

            <div className={s.content}>
                <Fragment key={key}>{children}</Fragment>
                <div className={s.close} onClick={close}>
                    <Icon name='times' size={32} />
                </div>
            </div>
        </div>,
        drawerRoot
    );
};

Drawer.propTypes = {
    opened: pt.bool,
    onClose: pt.func
};

Drawer.defaultProps = {
    opened: true,
    onClose: () => {}
};

export default Drawer;
