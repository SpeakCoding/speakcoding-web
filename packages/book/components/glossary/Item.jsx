import React from 'react';
import pt from 'prop-types';
import s from './glossary.css';

const Item = ({ id, data }) => {
    if (!data) return null;

    const { name, Definition, Additional } = data;

    return (
        <div className={s.item}>
            <div id={id} className={s.anchor} />
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
    id: pt.string.isRequired,
    data: pt.object.isRequired
};

export default Item;
