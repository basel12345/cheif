import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './services.component.html',
})


export class ServicesComponent implements OnInit {

	Filter = {
		product: null,
		cost: null,
		price: null,
		ingredients: null,
	}

	constructor() { }

	ngOnInit() {
	}

	Search() {

	}
}
