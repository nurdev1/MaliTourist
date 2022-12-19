import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterRegionsComponent } from './ajouter-regions/ajouter-regions.component';
import { AjouterPaysComponent } from './ajouter-pays/ajouter-pays.component';
import { AjouterPopulationComponent } from './ajouter-population/ajouter-population.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HeaderComponent } from './header/header.component';
import { LeadingPageComponent } from './leading-page/leading-page.component';
import { FooterComponent } from './footer/footer.component';
import { RegionsComponent } from './regions/regions.component';
import { DetailsRegionsComponent } from './details-regions/details-regions.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterRegionsComponent,
    AjouterPaysComponent,
    AjouterPopulationComponent,
    ConnexionComponent,
    InscriptionComponent,
    HeaderComponent,
    LeadingPageComponent,
    FooterComponent,
    RegionsComponent,
    DetailsRegionsComponent,
    AdminAccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
