import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Injectable()
export class getAllServicesResolver implements Resolve<any> {
	constructor(private serviceService: ServiceService) { }

	resolve() {
		return this.serviceService.getAllServices();
	}
}