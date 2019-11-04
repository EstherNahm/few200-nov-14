import { Component, OnInit } from '@angular/core';
import { TodoItem } from './models';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  stuff$: Observable<TodoItem[]>;
  constructor(private service: TodoDataService) { }

  ngOnInit() {
    // right before component is displayed on the screen, angular calls this method
    this.stuff$ = this.service.getTodos();
  }

  onItemAdded(description: string) {
    this.service.addTodoItem(description);
  }
}
