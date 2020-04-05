import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  produits : Observable<Produit[]>;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.findAll();
  }

}
