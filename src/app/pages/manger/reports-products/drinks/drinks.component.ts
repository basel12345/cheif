import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './drinks.component.html',
})


export class DrinksComponent implements OnInit {
	
	Filter = {
		product: null,
		cost: null,
		price: null,
		ingredients: null,
	}
	constructor() { }

	ngOnInit() {
	}
	

}
