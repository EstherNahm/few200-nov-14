import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface MathEntity {
  id: string;
  question: string;
  answer: number;
}

export interface State extends EntityState<MathEntity> {
  currentQuestion: number;
  wrongGuesses: number;
  rightGuesses: number;
}

export const adapter = createEntityAdapter<MathEntity>();

const initialState: State = {
  ids: ['1', '2', '3', '4', '5'],
  entities: {
    1: { id: '1', question: '1 + 2', answer: 3 },
    2: { id: '2', question: '2 + 2', answer: 4 },
    3: { id: '3', question: '3 + 2', answer: 5 },
    4: { id: '4', question: '4 + 2', answer: 6 },
    5: { id: '5', question: '5 + 2', answer: 7 },
  },
  currentQuestion: 1,
  wrongGuesses: 0,
  rightGuesses: 0
};

const reducerFunction = createReducer(
  initialState,
  on(actions.answerSuccess, (state, action) => ({ ...state, currentQuestion: state.currentQuestion + 1 })),
  on(actions.answerFail, (state, action) => ({ ...state, wrongGuesses: state.wrongGuesses + 1 })),
  on(actions.answerSuccess, (state, action) => ({ ...state, rightGuesses: state.rightGuesses + 1 }))
  // on(actions.loadQuestions, (state, action) => adapter.addAll(action.question, state))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}
