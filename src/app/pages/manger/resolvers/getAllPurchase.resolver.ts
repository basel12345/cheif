import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { PurchasesService } from '../services/purchases.service';

@Injectable()
export class getAllPurchaseResolver implements Resolve<any> {
	constructor(private purchasesService: PurchasesService) { }

	resolve() {
		return this.purchasesService.getAllPurchase();
	}
}