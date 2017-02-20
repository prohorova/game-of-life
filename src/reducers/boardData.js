import * as utils from '../utils/utils';
import constants from '../constants/constants';

let initialState = {
    boardSize: {
        cols: 30,
        rows: 50
    },
    board: []
};

const boardData = (state = initialState, action) => {
    let board;
    switch (action.type) {
        case constants.SET_BOARD_SIZE:
            return { ...state, boardSize: action.boardSize};
        case constants.RESET:
            let boardSize = action.boardSize || state.boardSize;
            board = utils.generateBoard(
                action.shouldFillRandomly,
                boardSize.cols,
                boardSize.rows
            );
            return {boardSize, board};
        case constants.NEXT_GENERATION:
            board =  utils.goToNextGeneration(state.board);
            return {...state, board};
        case constants.TOGGLE_CELL:
            board = utils.toggleCell(state.board, action.coords.col, action.coords.row);
            return {...state, board};
        default:
            return state;
    }
};

export default boardData;