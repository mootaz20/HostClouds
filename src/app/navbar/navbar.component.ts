import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  scrolled: boolean = false;
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  };

  ngOnInit() {
    this.checkWindowSize();
  };

  private checkWindowSize() {
    this.isMobile = window.innerWidth < 991;
    console.log(this.isMobile);
  };
}
