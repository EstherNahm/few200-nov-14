import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListItem } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;

  constructor() { }

  ngOnInit() {
  }

}
