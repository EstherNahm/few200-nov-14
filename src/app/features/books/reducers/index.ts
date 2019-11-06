import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { BookListItem } from '../models';
import { Observable } from 'rxjs';

export const featureName = 'booksFeature';

export interface BooksState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. feature selector
// tslint:disable-next-line: variable-name
export const _selectBooksFeature = createFeatureSelector<BooksState>(featureName);
// 2. selector per branch - there is one selector branch here which is: list
// tslint:disable-next-line: variable-name
export const _selectListBranch = createSelector(_selectBooksFeature, m => m.list);
// 3. helpers (optional)
// this returns an object with 4 properties that are functions
// they have select IDs that gives us references to the items
// tslint:disable-next-line: variable-name
export const { selectAll: _selectBookListArray } = fromList.adapter.getSelectors(_selectListBranch);
// 4. what the components need

// for our list
export const selectBookListItems = createSelector(
  _selectBookListArray,
  (books) => books.map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    type: book.type,
  } as BookListItem)));
