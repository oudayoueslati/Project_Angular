import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  user!: User;

  ngOnInit(): void {
    this.user = new User();
  }

  add() {
    this.user.category = "Customer";
    
  }
}
