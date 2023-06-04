import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() drawer!: MatDrawer
  public isSmall = false

  ngOnInit(): void {
    if (window.innerWidth < 700) this.isSmall = true
  }

  @HostListener('window:resize')
  isSmallScreen() {
    if (window.innerWidth < 700 && !this.isSmall) this.isSmall = true
    if (window.innerWidth > 700 && this.isSmall) this.isSmall = false
  }


}
