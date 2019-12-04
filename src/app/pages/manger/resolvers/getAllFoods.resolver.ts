import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { FoodService } from '../services/foods.service';

@Injectable()
export class getAllFoodsResolver implements Resolve<any> {
  constructor(private foodService: FoodService) { }

  resolve() {
    return this.foodService.getAllFoods();
  }
}