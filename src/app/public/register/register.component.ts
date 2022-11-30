import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  submit(): void {
    console.log({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm
    });
  }
}
