import { Component, OnInit, NgModule } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	templateUrl: './add-order-list.component.html',
})


export class AddOrderListComponent implements OnInit {
	Order = {
		name: null,
		value: null,
		ingredients: null
	}

	val: any = [];
	checkboxes = [
		{
			id: 1,
			value: 'father',
			price: 25,
			quantity: 1,
		},
		{
			id: 2,
			value: 'mother',
			price: 20,
			quantity: 1,
		},
		{
			id: 3,
			value: 'mother',
			price: 30,
			quantity: 1,
		},
		{
			id: 4,
			value: 'mother',
			price: 60,
			quantity: 1,
		},
		{
			id: 5,
			value: 'mother',
			price: 66,
			quantity: 1,
		},
		{
			id: 6,
			value: 'فاهيتا فراخ',
			price: 70,
			quantity: 1,
		}
	]

	constructor(
		private activeModal: NgbActiveModal,
	) { }

	ngOnInit() {
	}

	save() {
		this.activeModal.close(this.val);
	}

	getValueChange(value, ch) {
		console.log(ch)
		console.log(value)
		if (value == true) {
			this.val.push(ch)
		} else {
			this.val = this.val.filter(row => row.id != ch.id);
			
		}
	}



}
