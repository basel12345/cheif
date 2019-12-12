import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { ActivatedRoute } from '@angular/router';


@Component({
	templateUrl: './reports.component.html',
})


export class reportsComponent implements OnInit {

	Filter = {
		name: null,
		numberTable: null
	}
	Reports: any;
	FilteredRows: any;



	constructor(
		private modalService: NgbModal,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.route.data.subscribe(res => {
			this.Reports = res.getAllOrder;
			console.log(this.Reports)
			this.filterData(this.Filter);
		})
	}

	Search() {
		this.filterData(this.Filter);
	}

	filterData(filter) {
		this.FilteredRows = this.Reports.filter((row) => {
			return (
				((filter.name === null) || (row.name.toLowerCase().indexOf(filter.name.toLowerCase()) > -1)) &&
				((filter.numberTable === null) || (row.table.numberTable === filter.numberTable))
			);
		})
	}


	invoiceDetails(row) {
		const toBeSavedRow = Object.assign({}, row);
		const model_ref = this.modalService.open(InvoiceDetailsComponent, { size: 'lg' })
		model_ref.componentInstance.id = toBeSavedRow._id;
		console.log(model_ref.componentInstance.id)
		model_ref.result.then(() => {
			
		}, () => {
		});
	}


}
