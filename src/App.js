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
        this.props.reset(true);
        this.props.run();
    }
    clear() {
        this.props.reset(false);
    }
    changeBoardSize(boardSize) {
        this.props.reset(false, boardSize);
    }
    render() {
        return (
            <div>
                <h1 className="well">
                    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">
                        Conway's Game of Life (click to learn more)
                    </a>
                </h1>
                <TopMenu run={this.props.run} pause={this.props.pause}
                         clear={this.clear} generation={this.props.generation}/>
                <Board board={this.props.board} toggleCell={this.props.toggleCell}/>
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

const mapStateToProps = (state) => ({
    board: state.boardData.board,
    generation: state.generation
});

const mapDispatchToProps = (dispatch) => ({
    reset: (shouldFillRandomly, size) => {
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
