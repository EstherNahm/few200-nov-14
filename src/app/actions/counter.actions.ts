import { createAction } from '@ngrx/store';

export const increment = createAction(
  '[app counter] increment'
);

export const decrement = createAction(
  '[feature] decrement'
);

export const reset = createAction(
  '[feature] reset'
);
