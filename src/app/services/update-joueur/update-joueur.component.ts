import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from 'src/app/model/joueur.model';
import { JoueurService } from '../joueur.service';


@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [
  ]
})

export class UpdateJoueurComponent implements OnInit {
  currentJoueur= new Joueur();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private joueurService: JoueurService) { }

  ngOnInit(): void {
    this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params.id).
    subscribe( joues =>{ this.currentJoueur = joues;}) ;

  }
   
   updateJoueur() {
    this.joueurService.updateJoueur(this.currentJoueur).subscribe(joues => {
    this.router.navigate(['joueurs']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
