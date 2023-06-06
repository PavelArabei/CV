import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {MatDrawer} from "@angular/material/sidenav";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('* => in', [
        query('li', [
          style({transform: 'translateX(800px)'}),
          stagger('75ms', [
            animate('300ms', style({transform: 'translateX(0)'}))
          ])
        ], {optional: true})
      ]),
      transition('* => out', [
        query('li', [
          style({transform: 'translateX(0)'}),
          stagger('75ms', [
            animate('300ms', style({transform: 'translateX(800px)'}))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {
  @Input() drawer!: MatDrawer
  animationState = 'void';

  items: { href: string, name: string }[] = [
    {href: "#me", name: 'Me'},
    {href: "#skills", name: 'Skills'},
    {href: '#projects', name: 'Projects'},
    {href: "#education", name: 'Education'},
    {href: "#languages", name: 'Languages'},
    {href: "#experience", name: 'Experience'},
    {href: "#contact", name: 'Contact'}
  ];

  constructor(private scrollService: ScrollService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.drawer._animationStarted.asObservable().subscribe((el) => {
      if (el.totalTime > 0) {
        if (this.drawer.opened) {
          this.renderer.setStyle(document.body, 'overflow', 'hidden');
          this.animationState = 'in'
        }
      }
    })
  }


  scrollToSkills(e: MouseEvent): void {
    e.preventDefault()
    const href = (e.target as HTMLAnchorElement).getAttribute('href');
    if (!href) return
    const elementId = href.substring(1);
    this.scrollService.scrollToElement(elementId);

    if (this.drawer.opened) {
      this.closeDrawer()
    }

  }

  closeDrawer() {
    this.animationState = 'out'
    setTimeout(() => {
      this.drawer.close()
      this.animationState = 'void'
    }, 500);
    this.renderer.removeStyle(document.body, 'overflow');

  }


  closeNav() {
    if (this.drawer.opened) {
      this.closeDrawer()
    }
  }
}
