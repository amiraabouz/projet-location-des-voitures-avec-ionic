export interface Root {
    cars: Car[],
    comptes: Compte[]
  }
  
  export interface Car {
    id: string;
    nom: string;
    image: string;
    prix: string;
    categorie_du_vehicule : string;
    N_immatriculation: string;
    Date_de_premiere_mise_en_circulation: string;
    Marque: string;
    Version : string;
    Type_de_transmission : string;
    Climatisation: string;
    Nombredeportes: string;
    Nombredepassagers: string;
     Capacitebagages : string;
    Ageminimum : string;
    Nombre_requis_dannees_de_possession_du_permis_de_conduire : string;
    Airbag: string;
    Accessoires: string;
    Equipementspeciaux: string;
  }
  export interface Compte {
    id: string;
    nom: string;
    prénom: string; 
    mail: string;
    numtel: string;
    datenaissance : string;
  }