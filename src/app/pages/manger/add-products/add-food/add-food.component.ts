import { Component, OnInit, NgModule } from '@angular/core';
import { AddFoodService } from '../../services/add-food.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
	templateUrl: './add-food.component.html',
})


export class AddFoodComponent implements OnInit {
	Food = {
		product: null,
		cost: null,
		price: null,
		ingredients: null,
	}
	constructor(
		private service: AddFoodService
	) { }

	ngOnInit() {
	}

	save(frm) {
		if (frm.valid) {
			this.service.addFoods(this.Food).subscribe(res => {
				if (res["status"] == true) {
					Swal.fire({
						title: 'Success',
						text: res["message"],
						type: 'success',
						icon: 'success',
						confirmButtonText: 'Ok'
					});
					frm.submitted = false;
					frm.reset();
				} else if (res["status"] == false) {
					Swal.fire({
						title: 'Falid to save the drink',
						text: res["message"],
						type: 'error',
						icon: 'error',
						confirmButtonText: 'Ok'
					});
				}
			})
		}
	}

}
