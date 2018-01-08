import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ville } from '../../model/ville';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class VilleService {

  private querySource = new BehaviorSubject<string>('');
  private queryObservable = this.querySource.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ville[]> {
    return this.http.get<Ville[]>(environment.dataWsURL + '/pvs');
  }

  getFiltered(): Observable<Ville[]> {
    console.log('getFiltered');
    return this.getAll()
      .combineLatest(this.queryObservable, (villes, query) => {
        return { 'villes': villes, 'query': query };
      })
      .map( req => {
        return req.villes.filter(ville => ville.Ville.toLowerCase().match(req.query.toLowerCase()));
      });
  }

  getVille(id: string): Observable<Ville> {
    return this.getAll()
      .mergeMap(villes => villes)
      .first(ville => ville.Ville === id);
  }

  setQuery(query: string) {
    this.querySource.next(query);
  }

}
