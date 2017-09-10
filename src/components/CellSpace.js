import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CellSpace = ({cell, col, row, toggleCell}) => {
    let classes = classNames({
        'cell': true,
        'alive': cell.alive,
        'young': cell.young
    });
    return (
        <div className={classes}
             onClick={() => toggleCell(col, row)}>
        </div>
    )
};

CellSpace.propTypes = {
    toggleCell: PropTypes.func.isRequired,
    cell: PropTypes.object.isRequired,
    col: PropTypes.number,
    row: PropTypes.number
};

export default CellSpace;