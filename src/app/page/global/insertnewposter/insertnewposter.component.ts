import { InsertNewPoster, } from './../models/letterboxd-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertnewposter',
  templateUrl: './insertnewposter.component.html',
  styleUrls: ['./insertnewposter.component.scss']
})
export class InsertnewposterComponent implements OnInit {
  @Input () public insertNewPoster!: InsertNewPoster

  public posterMandado: string = "";


  constructor() { }

  ngOnInit(): void {}

  public soltarTeclado (textoEscrito: string) {
    this.posterMandado = textoEscrito
  }

}
