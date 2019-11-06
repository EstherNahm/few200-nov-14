import { Component, OnInit } from '@angular/core';
import { addBook } from '../../actions/list.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, typeEl: HTMLSelectElement) {
    const itemToAdd = {
      title: titleEl.value,
      author: authorEl.valueAsNumber,
      type: typeEl.value
    };

    this.store.dispatch(addBook({ ...itemToAdd }));
    titleEl.value = '';
    authorEl.value = '';
    typeEl.value = '2';
    titleEl.focus();
  }
}
