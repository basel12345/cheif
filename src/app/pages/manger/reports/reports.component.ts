import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';


@Component({
	templateUrl: './reports.component.html',
})


export class reportsComponent implements OnInit {

	Filter = {
		minDate: null,
		maxDate: null
	}

	Reports = [
		{ number: 1, numberBill: 1, tableNumber: 1, date: "21-8-2019", time: "01:30 AM", name: "basel", total: 120 },
		{ number: 2, numberBill: 2, tableNumber: 2, date: "22-8-2019", time: "02:30 AM", name: "basel", total: 220 },
		{ number: 3, numberBill: 3, tableNumber: 5, date: "23-8-2019", time: "03:30 AM", name: "basel", total: 320 },
		{ number: 4, numberBill: 4, tableNumber: 8, date: "24-8-2019", time: "04:30 AM", name: "basel", total: 420 },
		{ number: 5, numberBill: 5, tableNumber: 15, date: "25-8-2019", time: "05:30 AM", name: "basel", total: 520 },
		{ number: 6, numberBill: 6, tableNumber: 50, date: "26-8-2019", time: "03:30 AM", name: "basel", total: 620 },
	]

	constructor(
		private modalService: NgbModal,
	) { }

	ngOnInit() {
	}

	Search() {

	}

	invoiceDetails() {
		const model_ref = this.modalService.open(InvoiceDetailsComponent, { size: 'lg' })
		model_ref.result.then((savedRow) => {

		}, () => {
		});
	}


}
