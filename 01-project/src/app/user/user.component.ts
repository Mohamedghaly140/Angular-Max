import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected: boolean = false;
  @Output() selectUser = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    this.selectUser.emit(this.user.id);
  }

  // selectedUser = signal(DUMMY_USERS[0]);
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // users = DUMMY_USERS;

  // get imagePath(): string {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  // onSelectUser(): void {
  //   const randomIndex = Math.floor(Math.random() * this.users.length);
  //   this.selectedUser.set(this.users[randomIndex]);
  //   // this.selectedUser = this.users[randomIndex];
  // }
}
