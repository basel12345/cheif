import { Component, OnInit, NgModule } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/foods.service';

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
	checkboxes: any;

	constructor(
		private activeModal: NgbActiveModal,
		private service: FoodService
	) { }

	ngOnInit() {
		this.service.getAllFoods().subscribe(res => {
			this.checkboxes = res;
		})
	}

	save() {
		this.activeModal.close(this.val);
	}

	getValueChange(value, ch) {
		if (value == true) {
			this.val.push(ch)
		} else {
			this.val = this.val.filter(row => row.id != ch.id);

		}
	}



}
