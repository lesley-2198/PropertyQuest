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
    { logo: 'assets/img/agencies/harcourts.png', name: 'Harcourts Beachfront' },
    { logo: 'assets/img/agencies/ipc.png', name: 'IPC Properties' },
    { logo: 'assets/img/agencies/home-and-equity.png', name: 'Home & Equity' },
    { logo: 'assets/img/agencies/chas-everitt.png', name: 'Chas Everitt' },
    { logo: 'assets/img/agencies/just-property.png', name: 'Just Property' },
    { logo: 'assets/img/agencies/keller-williams.png', name: 'Keller Williams' },
    { logo: 'assets/img/agencies/pam-golding.png', name: 'Pam Golding' },
    { logo: 'assets/img/agencies/tyson-properties.png', name: 'Tyson Properties' },
    { logo: 'assets/img/agencies/remax.png', name: 'RE/MAX' },
  ];


  sliderConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };


  city: string = '';

  search(type: string) {
    console.log(`Searching for ${type} in ${this.city}`);
    // Implement your search logic here
  }
}
