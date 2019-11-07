import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuestionListItem } from '../models/question-list-item.model';

export const featureName = 'mathgameFeature';

export interface MathgameState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// tslint:disable-next-line: variable-name
export const _selectQuestionFeature = createFeatureSelector<MathgameState>(featureName);
// tslint:disable-next-line: variable-name
export const _selectListBranch = createSelector(_selectQuestionFeature, m => m.list);
// tslint:disable-next-line: variable-name
export const { selectAll: _selectQuestionListArray,
  // tslint:disable-next-line: variable-name
  selectEntities: _selectQuestionEntities }
  = fromList.adapter.getSelectors(_selectListBranch);

export const selectNumberOfWrongGuesses = createSelector(_selectListBranch, b => b.wrongGuesses);
export const selectNumberOfRightGuesses = createSelector(_selectListBranch, b => b.rightGuesses);

export const selectQuestionItems = createSelector(
  _selectQuestionListArray,
  (questions) => questions.map(question => ({
    id: question.id,
    question: question.question,
    answer: question.answer,
  } as QuestionListItem)));

// tslint:disable-next-line: variable-name
export const _selectCurrentQuestionNumber = createSelector(_selectListBranch, b => b.currentQuestion);

export const selectCurrentQuestion = createSelector(
  _selectQuestionEntities,
  _selectCurrentQuestionNumber,
  (questions, num) => {
    return questions[num] as QuestionListItem;
  }
);
export const selectYouLose = createSelector(
  selectNumberOfWrongGuesses,
  g => g === 3
);

export const selectYouWin = createSelector(
  selectNumberOfRightGuesses,
  g => g === 5
);
