import {INCREMENT, DECREMENT} from '../constants/ActionTypes';

const initialState = {num: 0};


/**
 * RootReducer
 *
 * @param {Object} state state
 * @param {Object} action action
 * @return {Object} state
 */
export default function count(state = initialState, action) {
  switch (action.type) {
  case INCREMENT:
    return {num: state.num + 1};
  case DECREMENT:
    return {num: state.num - 1};
  default:
    return state;
  }
}
