import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbMenuService,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { TaskVideoComponent } from './components/task-video/task-video.component';
import { DescriptionDirective } from './directives/description.directive';
import { CoreModule } from 'src/app/modules/core/core.module';
import { HtmlComponent } from './sections/html/html.component';
import { CssComponent } from './sections/css/css.component';
import { JavascriptComponent } from './sections/javascript/javascript.component';
import { TypescriptComponent } from './sections/typescript/typescript.component';
import { JobComponent } from './sections/job/job.component';
import { IonicComponent } from './sections/ionic/ionic.component';
import { AngularComponent } from './sections/angular/angular.component';
import { TaskTextComponent } from './components/task-text/task-text.component';
import { TitleDirective } from './directives/title.directive';
import { VideoListDirective } from './directives/video-list.directive';
import { ExerciseDirective } from './directives/exercise.directive';
import { ExerciseListDirective } from './directives/exercise-list.directive';
import { SectionComponent } from './components/section/section.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionListDirective } from './directives/question-list.directive';
import { ExtraQuestionDirective } from './directives/extra-question.directive';
import { BootstrapComponent } from './sections/bootstrap/bootstrap.component';
import { LinkDirective } from './directives/link.directive';
import { TaskComponent } from './components/task/task.component';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightModule } from 'ngx-highlightjs';
import { TaskCodeComponent } from './components/task-code/task-code.component';
import { PageLinkDirective } from './directives/page-link.directive';
import { NestjsComponent } from './sections/nestjs/nestjs.component';
import { GitBasicsComponent } from './sections/git-basics/git-basics.component';
import { GitExpertComponent } from './sections/git-expert/git-expert.component';
import { InfoDirective } from './directives/info.directive';
import { InfoListDirective } from './directives/info-list.directive';
import { SidebarTitleDirective } from './directives/sidebar-title.directive';

@NgModule({
  declarations: [
    // Pages
    AcademyComponent,

    // Sections -> add a new section below the last section-component
    JobComponent,
    HtmlComponent,
    CssComponent,
    BootstrapComponent,
    GitBasicsComponent,
    JavascriptComponent,
    TypescriptComponent,
    GitExpertComponent,
    AngularComponent,
    IonicComponent,
    NestjsComponent,

    // Components
    SectionComponent,
    TaskComponent,
    TaskTextComponent,
    TaskVideoComponent,
    TaskCodeComponent,
    QuestionsComponent,

    // Directives
    VideoListDirective,
    TitleDirective,
    DescriptionDirective,
    ExerciseDirective,
    ExerciseListDirective,
    QuestionListDirective,
    ExtraQuestionDirective,
    LinkDirective,
    PageLinkDirective,
    InfoDirective,
    InfoListDirective,
    SidebarTitleDirective,
  ],
  imports: [
    AcademyRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    CoreModule,
    NbMenuModule.forRoot(),
    HighlightModule,
    HighlightPlusModule,
  ],
  providers: [NbSidebarService, NbMenuService],
})
export class AcademyModule {}
