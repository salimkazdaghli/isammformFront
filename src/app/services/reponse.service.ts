import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reponse } from '../models/reponse.model';

const baseUrl = "http://localhost:5000/api/reponses" ;


@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http : HttpClient) { }
  getAll(): Observable<Reponse[]> {
    return this.http.get<Reponse[]>(baseUrl);
  }

  getReponse(id: any): Observable<any> {
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

  findByTitle(title: any): Observable<Reponse[]> {
    return this.http.get<Reponse[]>(`${baseUrl}?title=${title}`);
  }
}
