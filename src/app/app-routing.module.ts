import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';
import { ServComponent } from './pages/serv/serv.component';
import { TechComponent } from './pages/tech/tech.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tech/:id', component: TechComponent },
  { path: 'serv/:id', component: ServComponent },
  { path: 'map/:id', component: MapComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
