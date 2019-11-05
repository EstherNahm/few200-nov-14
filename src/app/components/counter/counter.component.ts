import { Component, OnInit } from '@angular/core';
import { ApplicationState, selectCurrentCount } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
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
}
function getCurrent(state: ApplicationState) {
  return state.counter.current;
}
