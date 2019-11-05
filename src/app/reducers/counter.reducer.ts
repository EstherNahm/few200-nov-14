import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// make typescript happy

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// job is to return a new state
export function reducer(state: CounterState, action: Action): CounterState {
  return myReducer(state, action);
}

const myReducer = createReducer(
  initialState,
  on(actions.reset, () => initialState),
  on(actions.increment, (state) => ({ current: state.current + 1 })),
  on(actions.decrement, (state) => ({ current: state.current - 1 }))
);
