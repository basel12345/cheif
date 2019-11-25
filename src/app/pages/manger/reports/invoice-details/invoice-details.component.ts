import { Component, OnInit, NgModule } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	templateUrl: './invoice-details.component.html',
})


export class InvoiceDetailsComponent implements OnInit {
	AllRows: any;
	totalPrice: number;
	constructor(
		private activeModal: NgbActiveModal,
	) { }

	ngOnInit() {
		this.AllRows = [
			{ id: 1, value: "father", price: 25, quantity: 2, selected: true },
			{ id: 5, value: "mother", price: 66, quantity: 1, selected: true },
			{ id: 2, value: "mother", price: 20, quantity: 1, selected: true },
			{ id: 6, value: "فاهيتا فراخ", price: 70, quantity: 3, selected: true },
			{ id: 3, value: "mother", price: 30, quantity: 1, selected: true },
			{ id: 4, value: "mother", price: 60, quantity: 1, selected: true }
		]

		this.getTotalPrice(this.AllRows);
	}

	getTotalPrice(array) {
		this.totalPrice = 0;
		array.forEach(element => {
			this.totalPrice += element.price * element.quantity;
		});
	}

	close() {
		this.activeModal.dismiss()
	}

}
