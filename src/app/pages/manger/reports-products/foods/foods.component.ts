import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './foods.component.html',
})


export class FoodsComponent implements OnInit {

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
