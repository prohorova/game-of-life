import React, { PropTypes } from 'react';
import CellSpace from './CellSpace';

const Board = ({board, toggleCell}) => {
    let style;
    if (board[0]) {
        style = {width: board[0].length * 11 + 'px'};
    }
    let boardEl = board.map((row, i) => {
        return (
            <div key={i} className="cell-wrapper">
                {
                    row.map((cell, j) =>
                        <CellSpace key={`${i}_${j}`} cell={cell} col={i} row={j}
                                   toggleCell={toggleCell}/>)
                }
            </div>
        )
    });
    return (
        <div className="board well" style={style}>
            {boardEl}
        </div>
    )
};

Board.propTypes = {
    toggleCell: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired
};

export default Board;