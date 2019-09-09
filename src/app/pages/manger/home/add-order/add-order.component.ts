import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
	templateUrl: './add-order.component.html',
})


export class AddOrderComponent implements OnInit {
	Order = {
		name: null,
		value: null,
		ingredients: null
	}
	constructor(
		private router:Router,
	) { }

	ngOnInit() {
	}

	addition() {
		this.router.navigate(['/pages/manger/home'])
	}
}
