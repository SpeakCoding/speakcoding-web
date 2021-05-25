import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { HL, Icon } from '@sc/ui';
import MobilePhone from '@sc/mobile';
import s from './phone.css';

const highlightShapeScale = 0.75;

const Phone = ({ opened, close }) => {
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        if (opened) setRefresh(Math.random());
    }, [opened]);

    return (
        <div className={classNames(s.box, opened && s.opened)}>
            <div className={s.device} style={{ '--scale': highlightShapeScale }}>
                <HL.Controller scale={highlightShapeScale} refresh={refresh}>
                    <MobilePhone />
                </HL.Controller>
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
