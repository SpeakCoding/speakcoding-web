import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@sc/ui';
import MobilePhone from '@sc/mobile';
import s from './phone.css';

const Phone = ({ opened, close }) => {
    return (
        <div className={classNames(s.box, opened && s.opened)}>
            <MobilePhone />
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
