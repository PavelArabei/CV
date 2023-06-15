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
      writeLanguages: 'Angular, RxJs, Ngrx, Angular Material',
      projectName: 'Application for purchasing air tickets',
      description: 'The application uses JWT authentication, guards for unregistered users, routing, typed reactive dynamic forms with validation, pipes for displaying dates and currencies, the ability to select and edit and change all stages of the purchase.',
      imgPath: 'assets/images/avia.png',
      link: 'https://airways-project.netlify.app/'
    },
    {
      writeLanguages: 'TypeScript, SCSS, HTML',
      projectName: 'Musical instrument shop',
      description: 'An application in which there are various types of sorting and searching goods, a shopping cart with pagination and the ability to delete and add goods, purchase goods',
      imgPath: 'assets/images/music-store.jpg',
      link: 'https://rss-online-store.vercel.app/'
    },
    {
      writeLanguages: 'Angular, RxJs, Ngrx,Tailwind',
      projectName: 'Application for work with YouTube API',
      description: 'An application for work with YouTube videos including their search, sorting. Routing, guards, directives, pipes, interceptor are involved',
      imgPath: 'assets/images/YouTube-API.png',
      link: 'https://rolling-scopes-school.github.io/pavelarabei-ANGULAR2023Q1/'
    }
  ]

}

//https://aleshkinpaul.github.io/airways/
