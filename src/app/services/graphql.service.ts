import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  HOST = environment.host_graphql;
  APIKEY = environment.graphq_apikey;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.APIKEY
    })
  };

  constructor(private http: HttpClient) { }

  query(data: any) : Observable<any>{
    return this.http.post(this.HOST, data, this.httpOptions);
  }
}
