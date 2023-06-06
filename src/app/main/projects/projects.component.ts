import {Component} from '@angular/core';
import {Project} from "../models/main-models";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms', style({transform: 'translateX(0)'}))
      ])
    ])
  ]
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      writeLanguages: 'Angular, RxJs, Ngrx',
      projectName: 'Application for work with YouTube API',
      description: 'An application for work with YouTube videos including their search, sorting',
      imgPath: 'assets/images/YouTube-API.png',
      link: 'http//:asdasd'
    },
    {
      writeLanguages: 'Angular, RxJs, Ngrx',
      projectName: 'Application for work with YouTube API',
      description: 'An application for work with YouTube videos including their search, sorting',
      imgPath: 'assets/images/YouTube-API.png',
      link: 'http//:asdasd'
    }
  ]

}
