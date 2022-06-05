import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { TechComponent } from './pages/tech/tech.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tech/:id', component: TechComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
