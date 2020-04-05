import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fermeture } from '../models/fermeture.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FermetureService {

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Fermeture[]> {
    return this.httpClient.get<Fermeture[]>('http://localhost:8080/fermetures');
  }
}
