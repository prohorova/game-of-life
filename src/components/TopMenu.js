import React, { PropTypes } from 'react';

const TopMenu = ({run, pause, clear, generation}) => {
    return (
        <div className="well top-menu">
            <button type="button" className="btn" onClick={run}>Run</button>
            <button type="button" className="btn" onClick={pause}>Pause</button>
            <button type="button" className="btn" onClick={clear}>Clear</button>
            <span className="generation">Generations: {generation}</span>
        </div>
    )
};

TopMenu.propTypes = {
    run: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    generation: PropTypes.number.isRequired
};

export default TopMenu;