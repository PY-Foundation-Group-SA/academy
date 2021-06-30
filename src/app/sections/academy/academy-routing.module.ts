import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyComponent } from './academy.component';
import { HtmlComponent } from './sections/html/html.component';
import { CssComponent } from './sections/css/css.component';
import { JavascriptComponent } from './sections/javascript/javascript.component';
import { TypescriptComponent } from './sections/typescript/typescript.component';
import { JobComponent } from './sections/job/job.component';
import { IonicComponent } from './sections/ionic/ionic.component';
import { AngularComponent } from './sections/angular/angular.component';
import { SectionGuard } from '../../modules/core/guards/section.guard';

const routes: Routes = [
  {
    path: '',
    component: AcademyComponent,
    children: [
      {
        path: 'beruf',
        component: JobComponent,
        canActivate: [SectionGuard],
      },
      {
        path: 'html',
        component: HtmlComponent,
        canActivate: [SectionGuard],
      },
      {
        path: 'css',
        component: CssComponent,
        canActivate: [SectionGuard],
      },
      {
        path: 'javascript',
        component: JavascriptComponent,
        canActivate: [SectionGuard],
      },
      {
        path: 'typescript',
        component: TypescriptComponent,
        canActivate: [SectionGuard],
      },
      {
        path: 'angular',
        component: AngularComponent,
        canActivate: [SectionGuard],
      },
      {
        path: 'ionic',
        component: IonicComponent,
        canActivate: [SectionGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademyRoutingModule {}
