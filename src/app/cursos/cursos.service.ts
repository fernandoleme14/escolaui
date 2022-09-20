import { Curso } from './../core/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; ''

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  list(): Curso[] {

  return [
   {id: 1, nomecurso: 'Desenvolvimento de Sistemas'},
   {id: 2, nomecurso: 'Química'},
   {id: 3, nomecurso: 'Edificações'},
  ];

  }

}
