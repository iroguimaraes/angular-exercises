import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex2-auto-complete-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex2-auto-complete-input.component.html',
  styleUrl: './ex2-auto-complete-input.component.scss'
})
export class Ex2AutoCompleteInputComponent {
  test = ''
  search = false;

  mockList = [
    { id: 1, name: 'Maça', description: '' },
    { id: 2, name: 'Pera', description: '' },
    { id: 3, name: 'Goiaba', description: '' }
  ];

  constructor() {

  }

  onInputChange() {
    this.search = this.test.length > 0; //change to true if meets condition
  }
}
