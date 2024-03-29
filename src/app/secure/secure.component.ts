import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../classes/auth';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user().subscribe(
      (user) => Auth.userEmitter.emit(user),
      () => this.router.navigate(['/login'])
    );
  }
}
