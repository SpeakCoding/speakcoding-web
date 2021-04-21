import React from 'react';
import pt from 'prop-types';
import s from './glossary.css';

const Item = ({ data }) => {
    if (!data) return null;

    const { name, Definition, Additional } = data;

    return (
        <div className={s.item}>
            <p>
                <b>
                    <i>{name}</i>
                </b>{' '}
                - <Definition />
            </p>
            {Additional && <Additional />}
        </div>
    );
};

Item.propTypes = {
    data: pt.object.isRequired
};

export default Item;
