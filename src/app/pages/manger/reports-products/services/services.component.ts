import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


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
	Services: any;
	FilteredRows: any;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.data.subscribe(res => {
			this.Services = res.getAllServices;
			this.filterData(this.Filter);
		})
	}

	Search() {
		this.filterData(this.Filter)
	}


	filterData(filter) {
		this.FilteredRows = this.Services.filter((row) => {
			return (
				((filter.product === null) || (row.product.toLowerCase().indexOf(filter.product.toLowerCase()) > -1)) &&
				((filter.cost === null) || (row.cost === filter.cost)) &&
				((filter.price === null) || (row.price === filter.price)) &&
				((filter.ingredients === null) || (row.ingredients.toLowerCase().indexOf(filter.ingredients.toLowerCase()) > -1))
			);
		})
	}
}
