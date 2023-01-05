import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.all().subscribe(
      (res: any) => {
        this.users = res.data;
      }
    );
  }

}
