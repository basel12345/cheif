import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { MangerMenu } from './manger/manger.menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = MangerMenu;
  // menu = MENU_ITEMS;
}
