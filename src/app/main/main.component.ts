import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  nativeElement!: any

  constructor(private scrollService: ScrollService, private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.scrollService.scrollObservable.subscribe((elementId: string) => {
      this.scrollToSkills(elementId);
    });
  }

  ngAfterViewInit(): void {
    this.nativeElement = this.elementRef.nativeElement
  }

  scrollToSkills(elementId: string): void {
    const skillsElement = this.nativeElement.querySelector(`#${elementId}`);
    if (skillsElement) {
      const targetOffset = skillsElement.offsetTop - 80;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }
    if (elementId === 'me') window.scrollTo({top: 0, behavior: 'smooth'});
    if (elementId === 'contact') window.scrollTo({top: 10000, behavior: 'smooth'});
  }
}
