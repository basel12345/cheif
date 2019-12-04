import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
	Drinks: any;
	FilteredRows: any;
	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.data.subscribe(res => {
			this.Drinks = res.getAllDrinks;
			this.filterData(this.Filter);
		})
	}

	Search() {
		this.filterData(this.Filter);
	}

	filterData(filter) {
		this.FilteredRows = this.Drinks.filter((row) => {
			return (
				((filter.product === null) || (row.product.toLowerCase().indexOf(filter.product.toLowerCase()) > -1)) &&
				((filter.price === null) || (row.price === filter.price)) &&
				((filter.cost === null) || (row.cost === filter.cost)) &&
				((filter.ingredients === null) || (row.ingredients.toLowerCase().indexOf(filter.ingredients.toLowerCase()) > -1))
			);
		})
	}

}
