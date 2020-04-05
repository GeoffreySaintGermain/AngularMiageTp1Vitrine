import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horaire } from '../models/horaire.model';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Horaire[]> {
    return this.httpClient.get<Horaire[]>('http://localhost:8080/horaires');
  }
}
