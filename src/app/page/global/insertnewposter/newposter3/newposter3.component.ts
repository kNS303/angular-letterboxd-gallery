import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newposter3',
  templateUrl: './newposter3.component.html',
  styleUrls: ['./newposter3.component.scss']
})
export class Newposter3Component implements OnInit {
  @Input () posterMandado: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
