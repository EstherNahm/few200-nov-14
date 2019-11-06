import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  type: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Eat Pray Love', author: 'Liz Gilbert', type: 'Hardcover' },
    2: { id: '2', title: 'mozart season', author: 'virigina wolff', type: 'paperback' }
  }
};

const reducerFunction = createReducer(
  initialState,
  // actions below are coming from list.actions.ts
  on(actions.addBook, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadBookSuccess, (state, action) => adapter.addAll(action.books, state)),
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}

