import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './add-drinks.component.html',
})


export class AddDrinksComponent implements OnInit {
	Drinks = {
		product: null,
		cost: null,
		price: null,
		ingredients: null,
	}
	constructor() { }

	ngOnInit() {
	}

	save(frm) {
		if (frm.valid) {
			frm.submitted = false;
			frm.reset();
		}
	}

}
