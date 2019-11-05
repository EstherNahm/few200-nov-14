import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';


@Injectable()
export class CounterEffects {

  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')), // what goes in is the action(applicationStarted); is going to come out of this map?
      filter(count => count !== null), // continue only if it was stored previously; don't continue if it's null
      map(count => parseInt(count, 10)), // what goes in is a string like '5'; what then comes out is the number 5
      map(by => counterActions.countBySet({ by })) // an action!
    ), { dispatch: true } // the last thing that comes in before this has to be an action because dispatch: true
  );

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  // logAllActions$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(action => console.log(`Got an action of type ${action.type}`))
  //   ), { dispatch: false }
  // );

  constructor(private actions$: Actions) { }
}
