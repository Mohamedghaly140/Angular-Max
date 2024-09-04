import { Injectable } from '@angular/core';
import { AddTaskData, Task } from './task/task.model';
import { dummyTasks } from '../data/dummy-tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks: Task[] = dummyTasks;

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  addTask(taskData: AddTaskData, userId: string): void {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
