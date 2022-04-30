import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  HOST = environment.host_rest;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getActor(idActor: String) : Observable<any>{
    console.log(this.HOST+'actor/'+idActor);
    return this.http.get(this.HOST+'actor/'+idActor, this.httpOptions);
  }

  listCharactersActor(idActor: String) : Observable<any>{
    return this.http.get(this.HOST+'actor/'+idActor+'/movie', this.httpOptions);
  }

  getMovie(idMovie: String) : Observable<any>{
    return this.http.get(this.HOST+'movie/'+idMovie, this.httpOptions);
  }

  listWatchesMovie(idMovie: String) : Observable<any>{
    return this.http.get(this.HOST+'movie/'+idMovie+'/customer', this.httpOptions);
  }

  getCustomer(idCustomer: String) : Observable<any>{
    return this.http.get(this.HOST+'customer/'+idCustomer, this.httpOptions);
  }
  
}