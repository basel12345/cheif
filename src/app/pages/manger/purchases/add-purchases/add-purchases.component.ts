import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './add-purchases.component.html',
})


export class AddPurchasesComponent implements OnInit {
	Purchases = {
		date: null,
		value: null,
		Ingredients: null,
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
