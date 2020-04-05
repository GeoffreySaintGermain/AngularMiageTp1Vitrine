import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AgendaPageComponent } from './agenda-page/agenda-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { InfosPageComponent } from './infos-page/infos-page.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component : HomePageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'administration',
    component:AdministrationPageComponent
  },
  {
    path:'infos',
    component:InfosPageComponent
  },
      {
        path:'infos/agenda',
        component:AgendaPageComponent
      },
      {
        path:'infos/map',
        component: MapPageComponent
      },
      {
        path:'infos/contact',
        component: ContactPageComponent
      }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
