import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newposter2',
  templateUrl: './newposter2.component.html',
  styleUrls: ['./newposter2.component.scss']
})
export class Newposter2Component implements OnInit {
  @Input () posterMandado: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
