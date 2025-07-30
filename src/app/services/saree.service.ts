import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SareeService {

  constructor( private http:HttpClient) { }

  //to store the json we had taken variable
  private sareeUrl = 'assets/sarees.json';

  getsaree():Observable<any>{
    return this.http.get(this.sareeUrl)

  }

}
