import {Component} from '@angular/core';
import {Language} from "../models/main-models";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  public languages: Language[ ] = [
    {
      language: 'English',
      level: ' Intermediate'
    },
    {
      language: 'Russian',
      level: ' Native'
    },
    {
      language: 'Polish',
      level: ' Elementary'
    },
    {
      language: 'Belarusian',
      level: ' Native'
    }
  ]
}
