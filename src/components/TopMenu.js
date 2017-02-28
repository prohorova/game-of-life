import React, { Component, PropTypes } from 'react';

class TopMenu extends Component {
    render() {
        return (
            <div className="well top-menu">
                <button type="button" className="btn" onClick={this.props.run}>Run</button>
                <button type="button" className="btn" onClick={this.props.pause}>Pause</button>
                <button type="button" className="btn" onClick={this.props.clear}>Clear</button>
                <span className="generation">Generations: {this.props.generation}</span>
            </div>
        )
    }
}

TopMenu.propTypes = {
    run: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    generation: PropTypes.number.isRequired
};

export default TopMenu;