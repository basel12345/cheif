import { Component, OnInit } from '@angular/core';
import { AddDrinksService } from "../../services/add-drinks.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
	templateUrl: './add-drinks.component.html',
})


export class AddDrinksComponent implements OnInit {
	Drinks = {
		product: null,
		cost: null,
		price: null,
		ingredients: null,
	}
	constructor(
		private service: AddDrinksService
	) { }

	ngOnInit() {
	}

	save(frm) {
		if (frm.valid) {
			this.service.addDrinks(this.Drinks).subscribe(res => {
				if (res['status'] == true) {
					Swal.fire({
						title: 'Success',
						text: res["message"],
						type: 'success',
						icon: 'success',
						confirmButtonText: 'Ok'
					});
					frm.submitted = false;
					frm.reset();
				} else if (res['status'] == false) {
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
