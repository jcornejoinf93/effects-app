import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  private url = 'https://reqres.in/api';

  getUsers() {
    return this.http.get(`${ this.url }/users?per_page=6`)
                .pipe(
                  map((resp: any) => resp.data)
                );
  }
}
