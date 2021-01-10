import { Component, OnInit } from '@angular/core';
import {Joueur} from '../model/joueur.model' ;
import { JoueurService } from '../services/joueur.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
})
export class JoueursComponent implements OnInit {
  joueurs : Joueur [] ;
  

  constructor( private joueurService : JoueurService,private router :Router) {
    //this.joueurs =joueurService.listeJoueur();
   
   }

  ngOnInit(): void {
    this.joueurService.listeJoueur().subscribe(joues => {
      console.log(joues);
      this.joueurs = joues;
      });
      }
  
  supprimerJoueur(j: Joueur)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.joueurService.supprimerJoueur(j.idJoueur).subscribe(() => {
console.log("Joueur supprimé");
this.SuprimerJoueurDuTableau(j);

});

}
SuprimerJoueurDuTableau(joue : Joueur) {
  this.joueurs.forEach((cur, index) => {
  if(joue.idJoueur=== cur.idJoueur) {
  this.joueurs.splice(index, 1);
  }
  });
  }

}

