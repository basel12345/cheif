import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
	Foods: any;
	FilteredRows: any;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.data.subscribe(res => {
			this.Foods = res.getAllFoods;
			this.filterData(this.Filter);
		})
	}



	Search() {
		this.filterData(this.Filter);
	}

	filterData(filter) {
		this.FilteredRows = this.Foods.filter((row) => {
			return (
				((filter.product === null) || (row.product.toLowerCase().indexOf(filter.product.toLowerCase()) > -1)) &&
				((filter.cost === null) || (row.cost === filter.cost)) &&
				((filter.price === null) || (row.price === filter.price)) &&
				((filter.ingredients === null) || (row.ingredients.toLowerCase().indexOf(filter.ingredients.toLowerCase()) > -1))
			);
		})
	}

}
