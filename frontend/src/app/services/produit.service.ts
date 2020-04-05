import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>('http://localhost:8080/produits');
  }
}
