import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ApplicationState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { QuestionListItem } from './models';
import { Observable } from 'rxjs';
import { selectQuestionItems, MathgameState, selectCurrentQuestion, selectYouLose, selectYouWin } from './reducers';
import { tap } from 'rxjs/operators';
import { answerSuccess, answerFail } from './actions/list.actions';

@Component({
  selector: 'app-mathgame',
  templateUrl: './mathgame.component.html',
  styleUrls: ['./mathgame.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MathgameComponent implements OnInit {

  @Input() model: QuestionListItem[] = [];
  question$: Observable<QuestionListItem>;
  youLose$: Observable<boolean>;
  youWin$: Observable<boolean>;
  currentCorrectAnswer: number;

  constructor(private store: Store<MathgameState>) { }

  ngOnInit() {
    this.question$ = this.store.select(selectCurrentQuestion);
    this.youLose$ = this.store.select(selectYouLose);
    this.youWin$ = this.store.select(selectYouWin);
    this.store.select(selectCurrentQuestion).pipe(
      tap(q => this.currentCorrectAnswer = q.answer)
    ).subscribe();
  }

  takeGuess(answerEl: HTMLInputElement) {
    // your task: dispatch the right action based on the guess.
    if (answerEl.valueAsNumber === this.currentCorrectAnswer) {
      this.store.dispatch(answerSuccess());
    } else {
      this.store.dispatch(answerFail());
    }
  }
}
