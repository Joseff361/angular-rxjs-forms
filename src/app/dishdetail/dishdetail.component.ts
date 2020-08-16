import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


import { Params, ActivatedRoute } from '@angular/router'; //access to the routers parameters
import { Location } from '@angular/common'; //track the location of my page in the browser's history

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack(): void{
    this.location.back(); //back into the previous item in the browser's history
  }

}
