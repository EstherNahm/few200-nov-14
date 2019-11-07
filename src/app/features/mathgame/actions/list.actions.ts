import { createAction, props } from '@ngrx/store';
import { MathEntity } from '../reducers/list.reducer';


export const answerSuccess = createAction(
  '[mathgame] answered a question successfully'
);

export const answerFail = createAction(
  '[mathgame] answered a question unsuccessfully'
);

export const loadQuestions = createAction(
  '[mathgame] loaded questions successfully',
  props<{ question: MathEntity[] }>()
);

export const loadQuestionFailure = createAction(
  '[mathgame] failure in loading questions',
  props<{ error: string }>()
);
