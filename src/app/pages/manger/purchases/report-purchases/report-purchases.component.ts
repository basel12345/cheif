import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
	templateUrl: './report-purchases.component.html',
})


export class ReportPurchasesComponent implements OnInit {

	Filter = {
		minDate: null,
		maxDate: null
	}
	total: any;
	FilteredRows: any;
	Purchases: any;

	constructor(
		private route:ActivatedRoute
	) { }

	ngOnInit() {
		this.route.data.subscribe(res => {
			this.Purchases = res.getAllPurchase;
			this.filterdData(this.Filter);
		})
	}

	getTotalValue(value){
	
		this.total += value; 
	}

	filterdData(filter) {
		if (filter.minDate == '') {
			filter.minDate = null;
		}

		if (filter.maxDate == '') {
			filter.maxDate = null;
		}

		this.FilteredRows = this.Purchases.filter(function (row) {
			return (
				((!filter.minDate) || (row.date >= filter.minDate)) &&
				((!filter.maxDate) || (row.date <= (filter.maxDate + 1)))
			); 
		})
		this.total = 0;
		this.FilteredRows.forEach(element => {
			this.total = this.total + element.value;
		});
	}

	Search() {
		this.filterdData(this.Filter);
	}

}
