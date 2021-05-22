import React from 'react';
import pt from 'prop-types';
import s from './grid.css';

const Grid = ({ cols, children }) => (
    <div
        className={s.box}
        style={{
            gridTemplateColumns: cols
        }}
    >
        {children}
    </div>
);

Grid.propTypes = {
    cols: pt.string
};

Grid.defaultProps = {
    cols: '1fr 1fr'
};

export default Grid;
