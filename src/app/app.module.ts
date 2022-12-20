import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SiteTouristiqueComponent } from './site-touristique/site-touristique.component';
import { LieuxTouristiqueComponent } from './lieux-touristique/lieux-touristique.component';
import { RoleAdminComponent } from './role-admin/role-admin.component';
import { AjouterRegionsComponent } from './ajouter-regions/ajouter-regions.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegionDescripComponent } from './region-descrip/region-descrip.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SiteTouristiqueComponent,
    LieuxTouristiqueComponent,
    RoleAdminComponent,
    AjouterRegionsComponent,
    LoginComponent,
    InscriptionComponent,
    RegionDescripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
