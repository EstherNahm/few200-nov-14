import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[app counter] increment'
);

export const decrement = createAction(
  '[feature] decrement'
);

export const reset = createAction(
  '[feature] reset'
);

export const countBySet = createAction(
  '[app counter] count by set',
  props<{ by: number }>()
);

export const fizz = createAction(
  '[fizz]'
);

export const buzz = createAction(
  '[buzz]'
);

