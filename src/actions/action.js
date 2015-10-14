import * as types from '../constants/ActionTypes';

/**
 * increment
 *
 * @return {Object}
 */
export function increment() {
  return {type: types.INCREMENT};
}

/**
 * decrement
 *
 * @return {Object}
 */
export function decrement() {
  return {type: types.DECREMENT};
}
