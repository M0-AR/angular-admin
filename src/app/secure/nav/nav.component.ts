import { Component, Input } from '@angular/core';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  user: User | undefined;

  constructor(private authService: AuthService) {
    Auth.userEmitter.subscribe((user) => (this.user = user));
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('success');
    });
  }
}
