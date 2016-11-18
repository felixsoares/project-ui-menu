import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Exercicio } from '../models/exercicio';

@Injectable()
export class ExercicioData{

  apiUrl = "http://localhost:3000";

  constructor(public http: Http) {
  }

  //carrega todas marcas
  findAll(): Observable<Exercicio[]> {
      return this.http.get(`${this.apiUrl}/exercicio`)
          .map(res => <Exercicio[]>res.json());
  }

  findByUser(id): Observable<Exercicio[]>{
    return this.http.get(`${this.apiUrl}/exercicio/usuario/${id}`)
          .map(res => <Exercicio[]>res.json());
  }

  create(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("BODY = ", body);

    return this.http.post(`${this.apiUrl}/exercicio`, body, options)
      .map(res => res.json());
  }

  update(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/exercicio`, body, options)
      .map(res => res.json());
  }

  delete(data){
      return this.http.delete(`${this.apiUrl}/exercicio/${data._id}`).map(res => res);
  }
}