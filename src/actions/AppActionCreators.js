import constants from '../constants/constants';
import * as utils from '../utils/utils';

const AppActionCreators = {
    resetBoard(shouldFillRandomly, boardSize) {
        return {
            type: constants.RESET,
            shouldFillRandomly,
            boardSize
        };
    },
    toggleCell(col, row) {
        return {
            type: constants.TOGGLE_CELL,
            coords: {
                col, row
            }
        }
    },
    run() {
        return (dispatch, getState) => {
            let timer = getState().timer;
            if (!timer) {
                timer = setInterval(() => {
                    let board = getState().boardData.board;
                    if (utils.hasLiveCells(board)) {
                        dispatch({type: constants.NEXT_GENERATION});
                    } else {
                        dispatch({type: constants.RESET});
                    }
                }, 300);
                dispatch({type: constants.RUN, timer});
            }
        }
    },
    pause() {
        return {
            type: constants.PAUSE
        }
    }
};

export default AppActionCreators;