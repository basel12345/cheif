import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './add-food.component.html',
})


export class AddFoodComponent implements OnInit {
	Food = {
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
			console.log(this.Food)
			frm.submitted = false;
			frm.reset();
		}
	}

}
