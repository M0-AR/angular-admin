import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [];
  page = 1;
  last_page: number | undefined;

  constructor(private userService: UserService) {
    this.load();
  }

  load(): void {
    this.userService.all(this.page).subscribe((res: any) => {
      this.users = res.data;
      this.last_page = res.meta.last_page;
    });
  }

  next(): void {
    if (this.page === this.last_page) return;
    this.page++;
    this.load();
  }

  prev(): void {
    if (this.page === 1) return;
    this.page--;
    this.load();
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.userService.delete(id).subscribe(
        () => {
          this.users = this.users.filter(u => u.id !== id);
        }
      );
    }
  }
}
