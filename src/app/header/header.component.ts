import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() drawer!: MatDrawer;
  public isSmall = false;
  isInUpPage = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    if (window.innerWidth < 700) this.isSmall = true;
  }

  @HostListener('window:resize')
  isSmallScreen() {
    if (window.innerWidth < 700 && !this.isSmall) this.isSmall = true;
    if (window.innerWidth > 700 && this.isSmall) this.isSmall = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const yPosition = window.scrollY;
    if (yPosition < 300) {
      if (!this.isInUpPage) return;
      this.isInUpPage = false;
    } else {
      if (this.isInUpPage) return;
      this.isInUpPage = true;
    }
  }

  goUp() {
    this.scrollService.scrollToElement('me');
  }
}
