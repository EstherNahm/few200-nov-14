import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, map } from 'rxjs/operators';
import { MovieEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {

  // adding a movie
  // when we get a added movie => addedMovieSuccess | addedMovieFailure
  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.addMovie),
      map(a => a.payload),
      switchMap(originalMovie => this.client.post<MovieEntity>('http://localhost:3000/movies', {
        // this is what gets posted to the server
        title: originalMovie.title,
        rentalPrice: originalMovie.rentalPrice,
        rentalDays: originalMovie.rentalDays
      }).pipe(
        // needs the id of the original movie in order to be a success; and then replaced by the new movie
        map(addedMovie => listActions.addMovieSuccess({ oldId: originalMovie.id, payload: addedMovie }))
      )
      )
    )
  );
  // on app start, it's going to go get the movies from the API and on:
  // success: returns the list of books in an action
  // failure: do something else (error message)
  // both are actions that will be dispatched

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      // starts another async stream; do this everytime from an api. the response looks like the thing in postman
      // the <GetAllResponse> in connected wtih the interface below "interface GetAllResponse"
      switchMap(() => this.client.get<GetAllResponse>('http://localhost:3000/movies')
        .pipe(
          // read the movies property off of this
          map(response => response.movies), // { movies: MovieEntity[]} => MovieEntity[]
          map(movies => listActions.loadMovieSuccess({ movies }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetAllResponse {
  movies: MovieEntity[];
}
