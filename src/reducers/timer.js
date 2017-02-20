import constants from '../constants/constants';

const timer = (state = null, action) => {
    switch(action.type) {
        case constants.RUN:
            return action.timer;
        case constants.PAUSE:
        case constants.RESET:
            clearInterval(state);
            return null;
        default:
            return state;
    }
};

export default timer;