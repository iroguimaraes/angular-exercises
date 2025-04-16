import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Ex1UserProfileFormComponent } from '../ex1-user-profile-form/ex1-user-profile-form.component';
import { Ex2AutoCompleteInputComponent } from '../ex2-auto-complete-input/ex2-auto-complete-input.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  buttons = [
    { id: 1, text: 'ex1 - Teste de Databinding', path: '/ex1', color: 'primary' },
    { id: 2, text: 'ex2 - Auto Complete input', path: '/ex2', color: 'primary' },
  ];

  constructor(private router: Router) {

  }

  handleClick(path: string) {
    this.router.navigate([path]);
  }
}
