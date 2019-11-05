import * as fromCounter from './counter.reducer';

// typescript

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// this is what our module needs
export const reducers = {
  counter: fromCounter.reducer
};
