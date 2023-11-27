import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportFormComponent } from './create-report-form/create-report-form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'createReport', component:CreateReportFormComponent
  },
  {
    path: '', component: MainComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
