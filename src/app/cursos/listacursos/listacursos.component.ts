import { Curso } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

  cursos: Curso[] = [];

  displayedColumns = ['id', 'nomecurso']; //  displayedColumns = ['nomecurso'];


  constructor(private CursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.list();
  }


}
