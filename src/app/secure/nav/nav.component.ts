import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  user: any;
  constructor(private authService: AuthService) {
    this.authService.user().subscribe(
      res => {
        this.user = res;
      }
    ); 
  }
}
