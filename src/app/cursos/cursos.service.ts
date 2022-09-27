import { Curso } from './../core/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; ''

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API);
  }

}
