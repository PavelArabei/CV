import {Component} from '@angular/core';
import {Course} from "../models/main-models";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public courses: Course[] = [
    {
      date: 'March, 2023 - June, 2023',
      progress: 'Certificate',
      progressLink: 'https://app.rs.school/certificate/25iky07t',
      courseName: 'Angular',
      institution: 'Rolling Scopes School',
      institutionLink: 'https://rs.school/angular/'
    },
    {
      date: 'September, 2022 - March, 2023',
      progress: 'Certificate',
      progressLink: 'https://app.rs.school/certificate/hk7ej1lf',
      courseName: 'Javascript/Front-End',
      institution: 'Rolling Scopes School',
      institutionLink: 'https://rs.school/js/'
    },
    {
      date: '2013-2018',
      progress: 'Engineer',
      courseName: 'Material handling, construction, road machinery and equipment',
      institution: 'Belarusian National Technical University',
      institutionLink: 'https://bntu.by/'
    }

  ]

}
