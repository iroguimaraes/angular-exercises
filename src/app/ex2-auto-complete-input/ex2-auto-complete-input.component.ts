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
    { id: 3, name: 'Goiaba', description: '' },
    { id: 4, name: 'Banana', description: '' },
    { id: 5, name: 'Uva', description: '' },
    { id: 6, name: 'Melancia', description: '' },
    { id: 7, name: 'Morango', description: '' },
    { id: 8, name: 'Abacaxi', description: '' },
    { id: 9, name: 'Kiwi', description: '' },
    { id: 10, name: 'Laranja', description: '' },
    { id: 11, name: 'Limão', description: '' },
    { id: 12, name: 'Mamão', description: '' },
    { id: 13, name: 'Maracujá', description: '' },
    { id: 14, name: 'Pêssego', description: '' },
    { id: 15, name: 'Amora', description: '' },
    { id: 16, name: 'Framboesa', description: '' },
    { id: 17, name: 'Manga', description: '' },
    { id: 18, name: 'Cereja', description: '' },
    { id: 19, name: 'Abacate', description: '' },
    { id: 20, name: 'Coco', description: '' }
  ];

  filterList!: [
    {
      id: number,
      name: string,
      description: string,
    }];

  constructor() {

  }

  onInputChange() {
    this.search = this.test.length > 0; //change to true if meets condition
    this.checkName();
  }

  checkName() {
    this.filterList = [{ id: 0, name: '', description: '' }]
    for (let i = 0; i < this.mockList.length; i++) {
      if (this.mockList[i].name.match(this.test)) {
        this.filterList.push(this.mockList[i])
      }
    }
  }
}
