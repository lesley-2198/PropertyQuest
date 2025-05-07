import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openSection: number | null = null;

  sections = [
    {
      title: 'Property for Sale',
      links: [
        { label: 'Residential Property for Sale', path: '/residential-sale' },
        { label: 'Commercial Property For Sale', path: '/commercial-sale' },
        { label: 'Developments For Sale', path: '/developments' }
      ]
    },
    {
      title: 'Property to Rent',
      links: [
        { label: 'Residential Property to Rent', path: '/residential-rent' },
        { label: 'Commercial Property To Rent', path: '/commercial-rent' }
      ]
    },
    {
      title: 'Advice',
      links: [
        { label: 'Property Advice', path: '/residential-rent' },
        { label: 'Property News', path: '/commercial-rent' },
        { label: 'Choosing a Neighborhood', path: '/commercial-rent' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/residential-rent' },
        { label: 'Careers', path: '/commercial-rent' },
        { label: 'Contact Us', path: '/commercial-rent' }
      ]
    },
  ];

  toggleSection(index: number) {
    this.openSection = this.openSection === index ? null : index;
  }

}
