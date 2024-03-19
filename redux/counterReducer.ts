// redux/counterReducer.ts

import { Reducer } from 'redux';
import { CounterActionTypes, INCREMENT, DECREMENT } from './types';

const initialState = {
  count: 0,
};

export const counterReducer: Reducer<{ count: number }, CounterActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
