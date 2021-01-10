import { Injectable } from '@angular/core';
import {Joueur} from '../model/joueur.model' ;
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  apiURL: string = 'http://localhost:8080/joueurs/api';

  joueurs : Joueur [] ;
  //joueur : Joueur ;

  constructor(private http : HttpClient) {
   /*  this.joueurs = [
      
      {idJoueur : 1, nomJoueur : "Fekri ", prenomJoueur : "Bouallegue", jourdesignature : new Date("01/14/2011"),posteJoueur:"Attaquant", age:30},
      {idJoueur : 2, nomJoueur : "iKSNADER", prenomJoueur : "bouallegue", jourdesignature : new Date("12/17/2010"),posteJoueur:"Milieu", age:25},
      {idJoueur : 3, nomJoueur :"yassine", prenomJoueur : "Bouallegue ", jourdesignature : new Date("02/20/2020"),posteJoueur:"Defenseur", age:18}

    
  ];*/

   }
   
   listeJoueur(): Observable<Joueur[]>{
    return this.http.get<Joueur[]>(this.apiURL);
    }
   
   ajouterJoueur( joue: Joueur):Observable<Joueur>{
    return this.http.post<Joueur>(this.apiURL, joue, httpOptions);
    }
   
   supprimerJoueur(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
  
   consulterJoueur(id: number): Observable<Joueur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Joueur>(url);
    }
  
updateJoueur(joues :Joueur) : Observable<Joueur>
{
return this.http.put<Joueur>(this.apiURL, joues, httpOptions);
}
trierJoueurs(){
  this.joueurs = this.joueurs.sort((n1,n2) => {
    if (n1.idJoueur > n2.idJoueur) {
        return 1;
    }

    if (n1.idJoueur < n2.idJoueur) {
        return -1;
    }

    return 0;
});
}
}
