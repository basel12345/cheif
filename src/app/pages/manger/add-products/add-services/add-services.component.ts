import { Component, OnInit, NgModule } from '@angular/core';
import { AddServiceService } from '../../services/add-services.serivce';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
	templateUrl: './add-services.component.html',
})


export class AddServicesComponent implements OnInit {
	Services = {
		product: null,
		cost: null,
		price: null,
		ingredients: null,
	}
	constructor(
		private service: AddServiceService
	) { }

	ngOnInit() {
	}

	save(frm) {
		if (frm.valid) {
			this.service.addServices(this.Services).subscribe(res => {
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
