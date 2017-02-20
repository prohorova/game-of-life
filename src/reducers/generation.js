import constants from '../constants/constants';

const generation = (state = 0, action) => {
    switch(action.type) {
        case constants.NEXT_GENERATION:
            return state + 1;
        case constants.RESET:
            return 0;
        default:
            return state;
    }
};

export default generation;