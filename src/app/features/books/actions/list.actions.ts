import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let id = 1;

export const addBook = createAction(
  '[books] added a book',
  ({ title, author, type }: { title: string, author: string, type: string }) => ({
    payload: {
      id: 'T' + (id++).toString(),
      title,
      author,
      type
    } as BookEntity
  })
);

export const addBookSuccess = createAction(
  '[books] added a book successfully',
  props<{ oldId: string, payload: BookEntity }>()
);

export const addBookFailure = createAction(
  '[books] added a book failure',
  props<{ errorMessage: string, badBook: BookEntity }>()
);

export const loadBookSuccess = createAction(
  '[books] loaded movies successfully',
  props<{ books: BookEntity[] }>()
);

export const loadBookFailure = createAction(
  '[books] failure in loading books',
  props<{ error: string }>()
);

