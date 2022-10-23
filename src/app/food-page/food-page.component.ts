import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService,
    private cartServise:CartService, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartServise.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}