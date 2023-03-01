import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulaire } from '../models/formulaire.model';

const baseUrl = 'http://localhost:5000/api/formulaires';


@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(private http : HttpClient) { }
  getAll(): Observable<Formulaire[]> {
    return this.http.get<Formulaire[]>(baseUrl);
  }

  get(id: any): Observable<Formulaire> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(title: any): Observable<Formulaire[]> {
    return this.http.get<Formulaire[]>(`${baseUrl}?title=${title}`);
  }
}
