import { Component, OnInit } from '@angular/core';
import { ApplicationState, selectCurrentCount, selectDecrementDisabled, selectCountingBy, selectFizz, selectBuzz } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  fizz$: Observable<boolean>;
  buzz$: Observable<boolean>;
  countingBy$: Observable<number>;
  count$: Observable<number>;
  decrementDisabled$: Observable<boolean>;
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.fizz$ = this.store.select(selectFizz);
    this.buzz$ = this.store.select(selectBuzz);
    this.count$ = this.store.select(selectCurrentCount);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    this.countingBy$ = this.store.select(selectCountingBy);
  }

  increment() {
    this.store.dispatch(actions.increment());
  }
  decrement() {
    this.store.dispatch(actions.decrement());
  }
  reset() {
    this.store.dispatch(actions.reset());
  }
  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }
}

