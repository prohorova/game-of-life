import React, { Component, PropTypes } from 'react';
import CellSpace from './CellSpace';

class Board extends Component {
    render() {
        let style;
        if (this.props.board[0]) {
            style = {width: this.props.board[0].length * 11 + 'px'};
        }
        let board = this.props.board.map((row, i) => {
            return (
                <div key={i} className="cell-wrapper">
                    {
                        row.map((cell, j) => 
                            <CellSpace key={`${i}_${j}`} cell={cell} col={i} row={j}
                            toggleCell={this.props.toggleCell}/>)
                    }
                </div>
            )
        });
        return (
            <div className="board well" style={style}>
                {board}
            </div>
        )
    }
}

Board.propTypes = {
    toggleCell: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired
};

export default Board;