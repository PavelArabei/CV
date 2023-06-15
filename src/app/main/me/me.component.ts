import {Component, HostListener, OnInit} from '@angular/core';
import {social} from "../../information/info";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  ngOnInit(): void {
    if (window.innerWidth <= 600) this.smallScreen = true
  }

  social = social
  smallScreen = false


  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth <= 600 && !this.smallScreen) this.smallScreen = true
    if (window.innerWidth > 600 && this.smallScreen) this.smallScreen = false

  }

}
