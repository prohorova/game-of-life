import React, { Component } from 'react';
import classNames from 'classnames';

class CellSpace extends Component {
    handleClick(col, row) {
        this.props.toggleCell(col, row);
    }
    render() {
        let classes = classNames({
            'cell': true,
            'alive': this.props.cell.alive,
            'young': this.props.cell.young
        });
        return (
            <div className={classes} 
                onClick={this.handleClick.bind(this, this.props.col, this.props.row)}>
            </div>
        )
    }
}

export default CellSpace;