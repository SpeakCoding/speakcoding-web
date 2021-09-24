import React from 'react';
import pt from 'prop-types';
import { Button } from '@sc/ui';
import L from '../localize';
import s from './card.css';

const CardButton = ({ onClick }) => (
    <div className={s.action}>
        <Button variant='black' onClick={onClick}>
            <L lang='en'>Complete</L>
            <L lang='ru'>Пройти</L>
        </Button>
    </div>
);

CardButton.propTypes = {
    onClick: pt.func
};

CardButton.defaultProps = {
    onClick: undefined
};

export default CardButton;
