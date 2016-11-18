import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Pessoa } from '../models/pessoa';

@Injectable()
export class PessoaData{

  apiUrl = "http://localhost:3000";

  constructor(public http: Http) {
  }

  //carrega todas marcas
  findAll(): Observable<Pessoa[]> {
      return this.http.get(`${this.apiUrl}/usuario`)
          .map(res => <Pessoa[]>res.json());
  }

  create(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/usuario`, body, options)
      .map(res => res.json());
  }

  update(data){
    console.log("PROVIDER = ", data);
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/usuario`, body, options)
      .map(res => res.json());
  }

  delete(data){
      return this.http.delete(`${this.apiUrl}/usuario/${data._id}`).map(res => res);
  }
}