import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailsRegionsComponent } from './details-regions/details-regions.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'listeRegion', component: RegionsComponent },
  { path: 'detailsRegions', component: DetailsRegionsComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueilAdmin', component: AdminAccueilComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
