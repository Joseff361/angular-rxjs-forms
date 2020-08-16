import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Injectable({ //enable the dependemcy injection
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
    return DISHES;
  }

  //The filter returns a sub-array
  getDish(id: String ): Dish{
    return DISHES.filter((dish) => (dish.id === id))[0]; //first element from the array
  }

  getFeatureDish( ): Dish{
    return DISHES.filter((dish) => dish.featured)[0]; //If exists
  }
}
