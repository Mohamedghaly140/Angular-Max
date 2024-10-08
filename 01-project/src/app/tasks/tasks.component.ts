import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../data/dummy-tasks';
import { AddTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) userId: string = '';
  @Input({ required: true }) name: string = '';

  isAddingTask: boolean = false;

  get filteredTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
