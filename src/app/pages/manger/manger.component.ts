import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';


@Component({
	selector: 'ngx-manger',
	template: `
  <router-outlet></router-outlet>
`,
})

// @NgModule({
// 	imports: [BrowserModule, FormsModule],
// 	declarations: [AppComponent],
// 	bootstrap: [AppComponent]
// })

export class MangerComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
