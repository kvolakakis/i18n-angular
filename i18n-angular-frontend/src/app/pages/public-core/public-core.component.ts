import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-core',
  templateUrl: './public-core.component.html',
  styleUrls: ['./public-core.component.scss'],
})
export class PublicCoreComponent implements OnInit {
  public isLoggedIn!: boolean;
  constructor() {

  }

  ngOnInit() {

  }
}
