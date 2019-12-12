import { Component, OnInit, NgModule, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService } from '../../services/reports.service';

@Component({
	templateUrl: './invoice-details.component.html',
})


export class InvoiceDetailsComponent implements OnInit {
	AllRows: any;
	totalPrice: number;
	@Input() id;
	order: any;
	constructor(
		private activeModal: NgbActiveModal,
		private service: ReportsService
	) { }

	ngOnInit() {
		this.service.getOneOrder(this.id).subscribe(res => {
			this.AllRows = res;
			this.order = this.AllRows["order"];
			console.log(this.AllRows)
		})
		// this.getTotalPrice(this.AllRows);
	}

	// getTotalPrice(array) {
	// 	this.totalPrice = 0;
	// 	array.forEach(element => {
	// 		this.totalPrice += element.price * element.quantity;
	// 	});
	// }

	close() {
		this.activeModal.dismiss()
	}

}
