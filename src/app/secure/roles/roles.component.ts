import { Component } from '@angular/core';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent {
  roles: Role[] = [];

  constructor(private roleService: RoleService) {
    this.roleService.all().subscribe((roles) => (this.roles = roles));
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.roleService.delete(id).subscribe(() => {
        this.roles = this.roles.filter((r) => r.id !== id);
      });
    }
  }
}
