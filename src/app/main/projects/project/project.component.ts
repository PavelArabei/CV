import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Project} from "../../models/main-models";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project
  @Input() i!: number

  public isSmall = false

  ngOnInit(): void {
    if (window.innerWidth < 700) this.isSmall = true
  }

  get even(): boolean {
    return this.i % 2 === 0;
  }

  @HostListener('window:resize')
  isSmallScreen() {
    if (window.innerWidth < 700 && !this.isSmall) this.isSmall = true
    if (window.innerWidth > 700 && this.isSmall) this.isSmall = false
  }

  navigateToExternalSite() {
    window.open(this.project.link, '_blank');
  }
}
