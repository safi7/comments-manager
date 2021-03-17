import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-main-nav-layout',
  templateUrl: './base.component.html',
  styleUrls: [
    '../../../styles/layouts/_main-nav.scss',
    '../../../styles/layouts/_side-menu-index.scss'
  ]
})
export default class MainNavLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

export { MainNavLayoutComponent };
