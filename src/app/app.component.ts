import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public isDarkTheme = true

  @HostBinding('class')
  get theme() {
    return this.isDarkTheme ? 'dark-theme' : 'light-theme';
  }


}
