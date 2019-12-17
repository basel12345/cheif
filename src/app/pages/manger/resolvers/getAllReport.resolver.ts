import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ReportsService } from '../services/reports.service';

@Injectable()
export class getAllReportResolver implements Resolve<any> {
	constructor(private reportsService: ReportsService) { }

	resolve() {
		return this.reportsService.getAllReport();
	}
}