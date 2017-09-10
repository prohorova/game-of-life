import React, { PropTypes } from 'react';

const BottomMenu = ({changeBoardSize}) => {
    return (
        <div className="well bottom-menu">
            <span>Board size: </span>
            <button type="button" className="btn"
                    onClick={() => changeBoardSize({cols: 30, rows: 50})}>
                Size: 30x50
            </button>
            <button type="button" className="btn"
                    onClick={() => changeBoardSize({cols: 50, rows: 70})}>
                Size: 50x70
            </button>
            <button type="button" className="btn"
                    onClick={() => changeBoardSize({cols: 70, rows: 90})}>
                Size: 70x90
            </button>
        </div>
    )
};

BottomMenu.propTypes = {
    changeBoardSize: PropTypes.func.isRequired
};

export default BottomMenu;