import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


import { Params, ActivatedRoute } from '@angular/router'; //access to the routers parameters
import { Location } from '@angular/common'; //track the location of my page in the browser's history

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

    //switchmap => interrupts an observable while map it and creates a new observable 
    this.route.params
    .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });

    // let id = this.route.snapshot.params['id']; // make and snspshot of the url in this particular time
    // this.dishService.getDish(id)
    // .subscribe((dish) => this.dish = dish);
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void{
    this.location.back(); //back into the previous item in the browser's history
  }

}
