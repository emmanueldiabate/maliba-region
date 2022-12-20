import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { RegionDescripComponent } from './region-descrip/region-descrip.component';
import { RoleAdminComponent } from './role-admin/role-admin.component';
import { SiteTouristiqueComponent } from './site-touristique/site-touristique.component';




const routes: Routes = [

  { path: '', component: SiteTouristiqueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









