import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';
import Board from './components/Board';
import AppActionCreators from './actions/AppActionCreators';

class App extends Component {
    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
        this.changeBoardSize = this.changeBoardSize.bind(this);
    }
    componentDidMount() {
        this.props.resetBoard(true);
        this.props.run();
    }
    clear() {
        this.props.resetBoard(false);
    }
    changeBoardSize(boardSize) {
        this.props.resetBoard(false, boardSize);
    }
    render() {
        const { run, pause, toggleCell, generation, board } = this.props;

        return (
            <div>
                <h1 className="well">
                    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">
                        Conway's Game of Life (click to learn more)
                    </a>
                </h1>
                <TopMenu run={run} pause={pause}
                         clear={this.clear} generation={generation}/>
                <Board board={board} toggleCell={toggleCell}/>
                <BottomMenu changeBoardSize={this.changeBoardSize} />

                <div className="info well">
                    Feel free to add cells while it's running.
                    The cells in light red are younger, dark red are older.
                    Enjoy!
                </div>
            </div>
        );
    }
}

App.propTypes = {
    board: PropTypes.array.isRequired,
    generation: PropTypes.number.isRequired,
    resetBoard: PropTypes.func.isRequired,
    run: PropTypes.func.isRequired,
    toggleCell: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    board: state.boardData.board,
    generation: state.generation
});

const mapDispatchToProps = (dispatch) => ({
    resetBoard: (shouldFillRandomly, size) => {
        dispatch(AppActionCreators.resetBoard(shouldFillRandomly, size))
    },
    run: () => {
        dispatch(AppActionCreators.run())
    },
    toggleCell: (x, y) => {
        dispatch(AppActionCreators.toggleCell(x, y))
    },
    pause: () => {
        dispatch(AppActionCreators.pause());
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
