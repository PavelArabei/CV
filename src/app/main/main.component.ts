import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
    this.scrollService.scrollObservable.subscribe((elementId: string) => {
      this.scrollToSkills(elementId);
    });
  }

  scrollToSkills(elementId: string): void {
    const skillsElement = document.getElementById(`${elementId}`);
    if (skillsElement) {
      const targetOffset = skillsElement.offsetTop - 80;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }
  }
}
