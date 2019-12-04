import { Component, OnInit, NgModule } from '@angular/core';
import { PurchasesService } from "../../services/purchases.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
	templateUrl: './add-purchases.component.html',
})


export class AddPurchasesComponent implements OnInit {
	Purchases = {
		date: null,
		value: null,
		Ingredients: null,
	}
	constructor(
		private service: PurchasesService
	) { }

	ngOnInit() {
	}

	save(frm) {
		if (frm.valid) {
			this.service.addPurchase(this.Purchases).subscribe(res => {
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
