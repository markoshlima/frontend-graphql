import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyflixComponent } from './components/myflix/myflix.component';

const routes: Routes = [
  { path: 'index', component: MyflixComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
