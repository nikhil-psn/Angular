import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  dishes: Dish[];
  errMess: string;
 // selectedDish: Dish;

  constructor(private dishService: DishService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,
      errMess => this.errMess = <any>errMess);
  }

/*  
  onSelect(dish){
    this.selectedDish=dish;
  }
*/
}
