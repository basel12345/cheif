import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
	templateUrl: './home.component.html',
})


export class HomeComponent implements OnInit {
	Table = [
		{ id: 1 },
		{ id: 2 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
		{ id: 10 },
		{ id: 11 },
		{ id: 12 },
		{ id: 13 },
		{ id: 14 },
		{ id: 15 },
	]
	constructor(
		private modalService: NgbModal,
		private router: Router
	) { }

	ngOnInit() {
	}

	addorder() {
		this.router.navigate(['/pages/manger/home/add-order']);
	}
 
}
