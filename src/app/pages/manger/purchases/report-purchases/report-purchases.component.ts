import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
	templateUrl: './report-purchases.component.html',
})


export class ReportPurchasesComponent implements OnInit {

	Filter = {
		minDate: null,
		maxDate: null
	}
	total: any;
	Purchases = [
		{ date: "20-8-2019", value: 20, purchases: "dfdsbjhdsfjds" },
		{ date: "25-8-2019", value: 25, purchases: "dfdsbjhdsfjds" },
		{ date: "29-8-2019", value: 29, purchases: "dfdsbjhdsfjds" },
	]
	FilteredRows: any;

	constructor() { }

	ngOnInit() {
		this.filterdData(this.Filter);
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
