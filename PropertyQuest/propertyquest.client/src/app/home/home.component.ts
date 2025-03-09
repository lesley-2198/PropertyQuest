import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  city: string = '';

  search(type: string) {
    console.log(`Searching for ${type} in ${this.city}`);
    // Implement your search logic here
  }
}
