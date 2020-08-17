import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Injectable({ //enable the dependemcy injection
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]>{
    return Promise.resolve(DISHES);
  }

  //The filter returns a sub-array
  getDish(id: String ): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]); //first element from the array
  }

  getFeatureDish( ): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]); //If exists
  }
}
