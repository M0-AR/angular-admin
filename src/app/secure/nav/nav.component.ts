import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input('user') user: User | undefined;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('success');
    });
  }
}
