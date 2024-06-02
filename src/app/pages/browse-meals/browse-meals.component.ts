import { Component, OnInit } from '@angular/core';
import { MealsModel } from '../../model';
import { MealsServiceService } from '../../meals-service.service';
import { NgFor } from '@angular/common';
import { BrowseItemsComponent } from '../browse-items/browse-items.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-meals',
  standalone: true,
  imports: [NgFor,BrowseItemsComponent],
  templateUrl: './browse-meals.component.html',
  styleUrl: './browse-meals.component.scss'
})
export class BrowseMealsComponent implements OnInit{

  public meals:MealsModel[]=[];

  constructor(private mealsService:MealsServiceService , private router:Router){}

  ngOnInit(): void {
    this.meals=this.mealsService.getMealsList();
    console.log(this.meals);
    
  }

  goTo()
  {
      this.router.navigate(['add-recipe'])
  }
}
