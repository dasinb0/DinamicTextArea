import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextareaPechoComponent } from './textarea-pecho/textarea-pecho.component';

const routes: Routes = [
  { path: 'textarea-pecho', component: TextareaPechoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
