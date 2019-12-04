import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { FoodService } from '../services/foods.service';
import { DrinksService } from '../services/drinks.service';

@Injectable()
export class getAllDrinksResolver implements Resolve<any> {
	constructor(private drinksService: DrinksService) { }

	resolve() {
		return this.drinksService.getAllDrinks();
	}
}