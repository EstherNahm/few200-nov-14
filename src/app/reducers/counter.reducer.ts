import { Action } from '@ngrx/store';

// make typescript happy

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// job is to return a new state
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    default:
      return state;
  }
}

