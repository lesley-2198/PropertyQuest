import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }


  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
}
