import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SareeListComponent } from './saree-list/saree-list.component';
import { SareeDetailComponent } from './saree-detail/saree-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sarees',component:SareeListComponent},
  {path:'saree/:id',component:SareeDetailComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
