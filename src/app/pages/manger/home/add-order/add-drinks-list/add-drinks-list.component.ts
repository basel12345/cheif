import { Component, OnInit, NgModule } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DrinksService } from '../../../services/drinks.service';

@Component({
	templateUrl: './add-drinks-list.component.html',
})


export class AddDrinksListComponent implements OnInit {
	Order = {
		name: null,
		value: null,
		ingredients: null
	}

	val: any = [];
	checkboxes: any;

	constructor(
		private activeModal: NgbActiveModal,
		private service: DrinksService
	) { }

	ngOnInit() {
		this.service.getAllDrinks().subscribe(res => {
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
