import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathgameComponent } from './mathgame.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';


@NgModule({
  declarations: [MathgameComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [MathgameComponent]
})
export class MathgameModule { }
