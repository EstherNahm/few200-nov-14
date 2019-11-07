import { Component, OnInit } from '@angular/core';
import { addBook } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, typeEl: HTMLSelectElement) {
    const itemToAdd = {
      title: titleEl.value,
      author: authorEl.value,
      type: typeEl.value
    };

    this.store.dispatch(addBook({ ...itemToAdd }));
    titleEl.value = '';
    authorEl.value = '';
    typeEl.value = '';
    titleEl.focus();
  }
}
