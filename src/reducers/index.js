import { combineReducers } from 'redux';
import boardData from './boardData';
import generation from './generation';
import timer from './timer';

const reducers = combineReducers({ boardData, generation, timer});

export default reducers;