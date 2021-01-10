import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
})
export class AddJoueurComponent implements OnInit {
  message:String;
  newJoueur= new Joueur();

  constructor(private joueurService : JoueurService,private router :Router) {
   }

  ngOnInit(): void {
  }
  
  addJoueur(){
    this.joueurService.ajouterJoueur(this.newJoueur)
    .subscribe(joue => {
    console.log(joue);
    });
    this.router.navigate(['joueurs']).then(() => {
      window.location.reload();});

    }

}
