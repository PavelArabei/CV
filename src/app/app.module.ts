import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MenuComponent} from './header/menu/menu.component';
import {NavComponent} from './header/nav/nav.component';
import {MeComponent} from './main/me/me.component';
import {IconComponent} from './main/me/icon/icon.component';
import {SkillsComponent} from './main/skills/skills.component';
import {ProjectsComponent} from './main/projects/projects.component';
import {ProjectComponent} from './main/projects/project/project.component';
import {ScrollAnimationDirective} from './derectives/scroll-animation.directive';
import {EducationComponent} from './main/education/education.component';
import {CourseComponent} from './main/education/course/course.component';
import {LanguagesComponent} from './main/languages/languages.component';
import {LanguageComponent} from './main/languages/language/language.component';
import {SideNavComponent} from './header/side-nav/side-nav.component';
import {ExperienceComponent} from './main/experience/experience.component';
import {CurrentExperienceComponent} from './main/experience/current-experience/current-experience.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { AnimateElementDirective } from './directives/animate-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    NavComponent,
    MeComponent,
    IconComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectComponent,
    ScrollAnimationDirective,
    EducationComponent,
    CourseComponent,
    LanguagesComponent,
    LanguageComponent,
    SideNavComponent,
    ExperienceComponent,
    CurrentExperienceComponent,
    AnimateElementDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
