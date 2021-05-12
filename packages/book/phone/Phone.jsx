import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@sc/ui';
import MobilePhone from '@sc/mobile';
import * as interceptor from './interceptor';
import s from './phone.css';

window.highlightShapeScale = 0.75;

const Phone = ({ opened, close }) => {
    const handleReady = useCallback(() => {
        interceptor.emitEvent('ready');
    }, []);

    return (
        <div className={classNames(s.box, opened && s.opened)}>
            <div className={s.device} style={{ '--scale': window.highlightShapeScale }}>
                <MobilePhone onReady={handleReady} />
            </div>
            <div className={s.close} onClick={close}>
                <Icon name='times' size={24} />
            </div>
        </div>
    );
};

Phone.propTypes = {
    opened: pt.bool.isRequired,
    close: pt.func.isRequired
};

export default Phone;
