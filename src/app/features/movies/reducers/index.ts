import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { MovieListItem } from '../models';
import { Observable } from 'rxjs';

export const featureName = 'moviesFeature';

export interface MoviesState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. feature selector
// tslint:disable-next-line: variable-name
export const _selectMoviesFeature = createFeatureSelector<MoviesState>(featureName);
// 2. selector per branch - there is one selector branch here which is: list
// tslint:disable-next-line: variable-name
export const _selectListBranch = createSelector(_selectMoviesFeature, m => m.list);
// 3. helpers (optional)
// this returns an object with 4 properties that are functions
// they have select IDs that gives us references to the items
// tslint:disable-next-line: variable-name
export const { selectAll: _selectMovieListArray } = fromList.adapter.getSelectors(_selectListBranch);
// 4. what the components need

// todo: we need a selector that returns a movielistItem []
// for our list
export const selectMovieListItems = createSelector(
  _selectMovieListArray,
  (movies) => movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    rentalPrice: movie.rentalPrice,
    rentalDays: movie.rentalDays,
    isTemporary: movie.id.startsWith('T')
  } as MovieListItem)));
