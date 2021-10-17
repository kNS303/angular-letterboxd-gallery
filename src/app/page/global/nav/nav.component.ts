import { Component, Input, OnInit } from '@angular/core';
import { Nav } from '../models/letterboxd-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() public nav!: Nav

  constructor() { }

  ngOnInit(): void {
  }

}
