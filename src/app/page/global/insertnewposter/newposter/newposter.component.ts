import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newposter',
  templateUrl: './newposter.component.html',
  styleUrls: ['./newposter.component.scss']
})
export class NewposterComponent implements OnInit {
  @Input () posterMandado: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}
