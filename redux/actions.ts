// redux/actions.ts

import { INCREMENT, DECREMENT, CounterActionTypes } from './types';

export const increment = (): CounterActionTypes => ({
  type: INCREMENT,
});

export const decrement = (): CounterActionTypes => ({
  type: DECREMENT,
});
