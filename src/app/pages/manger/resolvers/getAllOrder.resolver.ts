import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { FoodService } from '../services/foods.service';
import { ReportsService } from '../services/reports.service';

@Injectable()
export class getAllOrderResolver implements Resolve<any> {
  constructor(private reportsService: ReportsService) { }

  resolve() {
    return this.reportsService.getAllOrder();
  }
}