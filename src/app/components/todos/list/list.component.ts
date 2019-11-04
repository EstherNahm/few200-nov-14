import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  items: TodoItem[] = [
    { id: '1', description: 'take down boo items', completed: false },
    { id: '2', description: 'eat candy', completed: true },
    { id: '3', description: 'scoop box', completed: false }
  ];
  constructor() { }

  ngOnInit() {
  }
  doIt() {

  }
}
