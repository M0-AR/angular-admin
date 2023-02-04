import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css'],
})
export class RoleCreateComponent {
  form: FormGroup;
  permissions: Permission[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private permissionsService: PermissionService
  ) {
    this.form = this.formBuilder.group({
      name: '',
    });

    this.permissionsService
      .all()
      .subscribe((permissions) => (this.permissions = permissions));
  }
}
