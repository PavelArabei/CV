import {Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'NgRx, RxJs', 'NestJs', 'Rest API', 'HTML', 'CSS, ScSS', 'Git', 'Webpack', 'Angular Material', 'Tailwind']
}
