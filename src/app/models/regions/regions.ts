import { Pays } from "../pays/pays";

export class Regions {

  id_region!: number;
  code_region!: string;
  nom_region!: string;
  code_pays!: string;
  domaine_activite_region!: string;
  superficie!: string;
  langue_majoritaire!: string;
  pays!: Pays;
}
