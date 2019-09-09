import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './add-services.component.html',
})


export class AddServicesComponent implements OnInit {
	Services = {
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
			console.log(this.Services)
			frm.submitted = false;
			frm.reset(); 
		}
	}
}
