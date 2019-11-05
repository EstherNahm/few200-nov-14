import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

// typescript

export interface ApplicationState {
  counter: fromCounter.CounterState;
}

// this is what our module needs
export const reducers = {
  counter: fromCounter.reducer
};

// selector (selector functions)
// 1. if feature, create a feature selector
// 2. create a selector for each branch of the state
const selectCounterBranch = (state: ApplicationState) => state.counter;

// 3. create "helpers" (optional)
// 4. create selectors that is needed for components
export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
// todo: need a function that returns the current value of the counter

