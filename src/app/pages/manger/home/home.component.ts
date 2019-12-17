import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	templateUrl: './home.component.html',
})


export class HomeComponent implements OnInit {
	Table: any;

	constructor(
		private router: Router,
		private route:ActivatedRoute
	) { }

	ngOnInit() {
		this.route.data.subscribe(res => {
			this.Table = res.getAllTable;
		})
	}

	addOrder(id) {
		this.router.navigate([`/pages/manger/home/add-order/${id}/1`]);
	}

	viewOrder(id) {
		this.router.navigate([`/pages/manger/home/add-order/${id}/2`]);
	}

	
 
}
