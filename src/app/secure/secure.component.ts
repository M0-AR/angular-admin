import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent {
  user: User | undefined;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user().subscribe(
      user => this.user = user,
      () => this.router.navigate(['/login'])
    );
  }

}
