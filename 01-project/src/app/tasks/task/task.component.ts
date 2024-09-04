import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) task?: Task;

  onComplete(): void {
    if (this.task) {
      this.tasksService.deleteTask(this.task.id);
    }
  }
}
