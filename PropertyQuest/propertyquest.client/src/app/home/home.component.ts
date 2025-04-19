import { Component } from '@angular/core';

interface PropertyAction {
  title: string;
  image: string;
  description: string;
  details: string;
  features: string[];
  route: string;
  buttonLabel: string;
}

interface Agency {
  logo: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  propertyActions: PropertyAction[] = [
    {
      title: 'Buy Property',
      image: 'assets/img/home-page/for-sale.jpg',
      description: 'Find the best properties to buy.',
      details: 'Explore a variety of properties available for purchase...',
      features: ['Extensive property listings', 'Competitive prices', 'Expert advice'],
      route: '/buy',
      buttonLabel: 'Search Properties'
    },
    {
      title: 'Rent Property',
      image: 'assets/img/home-page/to-rent.jpg',
      description: 'Discover rental properties.',
      details: 'Discover a wide range of rental properties...',
      features: ['Flexible lease terms', 'Pet-friendly options', 'Prime locations'],
      route: '/rent',
      buttonLabel: 'Search Properties'
    },
    {
      title: 'Sell Property',
      image: 'assets/img/home-page/to-buy.jpg',
      description: 'Advertise your property for sale.',
      details: 'Advertise your property for sale and reach potential buyers...',
      features: ['Comprehensive marketing', 'Professional photography', 'Targeted advertising'],
      route: '/sell',
      buttonLabel: 'Learn More'
    }
  ];

  agencies: Agency[] = [
    { logo: 'assets/img/agencies/harcourts.png', name: 'Harcourts Beachfront', url: 'https://www.harcourts.co.za/' },
    { logo: 'assets/img/agencies/ipc.png', name: 'IPC Properties', url: 'https://www.ipcproperties.co.za/' },
    { logo: 'assets/img/agencies/home-and-equity.png', name: 'Home & Equity', url: 'https://www.homeandequity.co.za/' },
    { logo: 'assets/img/agencies/chas-everitt.png', name: 'Chas Everitt', url: 'https://www.chaseveritt.co.za/' },
    { logo: 'assets/img/agencies/just-property.png', name: 'Just Property', url: 'https://www.just.property/' },
    { logo: 'assets/img/agencies/keller-williams.png', name: 'Keller Williams', url: 'https://www.kwsa.co.za/' },
    { logo: 'assets/img/agencies/pam-golding.png', name: 'Pam Golding', url: 'https://www.pamgolding.co.za/' },
    { logo: 'assets/img/agencies/tyson-properties.png', name: 'Tyson Properties', url: 'https://www.tysonprop.co.za/' },
    { logo: 'assets/img/agencies/remax.png', name: 'RE/MAX', url: 'https://www.remax.co.za/' }
  ];


  city: string = '';

  search(type: 'rent' | 'buy'): void;
  search(city: string): void;
  search(param: string): void {
    if (param === 'rent' || param === 'buy') {
      console.log(`Searching to ${param} in ${this.city}`);
    } else {
      console.log(`Searching in ${param}`);
    }
  }
}
