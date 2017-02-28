import React, { Component, PropTypes } from 'react';

class BottomMenu extends Component {
    handleClick(cols, rows) {
        this.props.changeBoardSize({cols, rows});
    }
    render() {
        return (
            <div className="well bottom-menu">
                <span>Board size: </span>
                <button type="button" className="btn"
                        onClick={this.handleClick.bind(this, 30, 50)}>
                    Size: 30x50
                </button>
                <button type="button" className="btn"
                        onClick={this.handleClick.bind(this, 50, 70)}>
                    Size: 50x70
                </button>
                <button type="button" className="btn"
                        onClick={this.handleClick.bind(this, 70, 90)}>
                    Size: 70x90
                </button>
            </div>
        )
    }
}

BottomMenu.propTypes = {
    changeBoardSize: PropTypes.func.isRequired
};

export default BottomMenu;