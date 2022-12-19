import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pays {

  api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  /*  -----------afficher pays-------- */
  afficherPays(): Observable<any> {
    return this.http.get(`${this.api}/pays/list`);
  }
  // ==========================AJOUT pays

  ajouterPays(pays:Pays) {
    return this.http.post(`${this.api}/pays/add`,pays);
  }

  // ==========================Supprimer Pays
  supprimerRegion(code_pays: string) {
    return this.http.delete(`${this.api}/region/delete/${code_pays}`);
  }
}
