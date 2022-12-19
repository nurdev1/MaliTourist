import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Regions {

  api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  /*  -----------afficher Regions-------- */
  afficherRegions(): Observable<any> {
    return this.http.get(`${this.api}/region/list`);
  }
  
  // ==========================AJOUT regions

  ajouterRegion(regions: Regions, codePays: string) {
    return this.http.post(`${this.api}/region/add/${codePays}`, regions);
  }

  /*  -----------afficher regions par id-------- */
  afficherRegionsParId(id_regions: number): Observable<any> {
    return this.http.get(`${this.api}/regions/read/${id_regions}`);
  }

  /*  -----------modifier Regions-------- */
  modifierRegions(regions: Regions, id_region: number) {
    return this.http.put(`${this.api}/region/update/${id_region}`, regions);
  }

  // ==========================Supprimer regions
  supprimerRegion( id_region: number) {
    return this.http.delete(`${this.api}/region/delete/${id_region}`);
  }
}
