import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Population {

  api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  /*  -----------afficher population-------- */
  afficherPopulation(): Observable<any> {
    return this.http.get(`${this.api}/population/list`);
  }
 
  // ==========================AJOUT population

  ajouterPopulation(population: Population) {
    return this.http.post(`${this.api}/population/add`, population);
  }

  /*  -----------afficher population par id-------- */
  afficherPopulationParId(id_population: number): Observable<any> {
    return this.http.get(`${this.api}/population/read/${id_population}`);
  }

  /*  -----------modifier Regions-------- */
  modifierPopulation(population: Population, id_population: number) {
    return this.http.put(`${this.api}/population/update/${id_population}`, population);
  }

  // ==========================Supprimer population
  supprimerPopulation(id_population: number) {
    return this.http.delete(`${this.api}/population/delete/${id_population}`);
  }
}
