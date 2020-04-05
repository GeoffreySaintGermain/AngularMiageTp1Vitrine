import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Horaire } from '../models/horaire.model';
import { Fermeture } from '../models/fermeture.model';
import { HoraireService } from '../services/horaire.service';
import { FermetureService } from '../services/fermeture.service';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.scss']
})
export class AgendaPageComponent implements OnInit {

  horaires: Observable<Horaire[]>;
  fermetures: Observable<Fermeture[]>;

  constructor(private horaireService : HoraireService,
              private fermetureService : FermetureService) { }

  ngOnInit(): void {
    this.horaires = this.horaireService.findAll();
    this.fermetures = this.fermetureService.findAll();
  }

}
