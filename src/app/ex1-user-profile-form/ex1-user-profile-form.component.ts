import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex1-user-profile-form',
  imports: [FormsModule],
  templateUrl: './ex1-user-profile-form.component.html',
  styleUrl: './ex1-user-profile-form.component.scss'
})
export class Ex1UserProfileFormComponent {
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  };

  resetForm() {
    this.user = { name: '', email: '', age: 0 };
  }

}
