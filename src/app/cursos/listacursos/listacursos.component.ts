import { Curso } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']


export class ListacursosComponent implements OnInit {


  cursos: Observable<Curso[]>;

  displayedColumns = ['id', 'nomecurso']; //  displayedColumns = ['nomecurso'];


  constructor(private CursosService: CursosService) {

    this.cursos = this.CursosService.list();
  }


  ngOnInit(): void {

  }


}
