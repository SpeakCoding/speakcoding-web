import React from 'react';
import pt from 'prop-types';
import { Icon } from '@sc/ui';
import L from '../localize';
import s from './time.css';

const messages = {
    chapter: (
        <>
            <L lang='en'>Reading time</L>
            <L lang='ru'>Время чтения главы</L>
        </>
    ),
    task: (
        <>
            <L lang='en'>Completion time</L>
            <L lang='ru'>Время выполнения</L>
        </>
    )
};

const Value = ({ mode, value }) => (
    <div className={s.box}>
        <div className={s.icon}>
            <Icon name='clock' size={24} />
        </div>
        {messages[mode]}
        &nbsp;
        {value}
    </div>
);

Value.propTypes = {
    mode: pt.oneOf(['chapter', 'task']),
    value: pt.string
};

Value.defaultProps = {
    mode: 'chapter',
    value: ''
};

export default Value;
