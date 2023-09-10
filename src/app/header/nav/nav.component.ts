import { Component, Input } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() isNav!: boolean;

  animationDuration = 10;

  constructor(private scrollService: ScrollService) {}

  scrollToSkills(e: MouseEvent): void {
    e.preventDefault();
    const href = (e.target as HTMLAnchorElement).getAttribute('href');
    if (!href) return;
    const elementId = href.substring(1);
    this.scrollService.scrollToElement(elementId);
  }
}
