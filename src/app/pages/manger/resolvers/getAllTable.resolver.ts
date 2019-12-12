import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { HomeService } from '../services/home.service';

@Injectable()
export class getAllTableResolver implements Resolve<any> {
	constructor(private homeService: HomeService) { }

	resolve() {
		return this.homeService.getAllTable();
	}
}