import { Component, Input } from '@angular/core';
import { MealsServiceService } from '../../meals-service.service';
import { MealsModel } from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {
  public meal:MealsModel|undefined
 
  
  @Input()
  set mId(value:string)
  {
    this.initDetails(value);
  }

  constructor(private mealsService:MealsServiceService,private router:Router){}

  initDetails(id:string)
  {
      this.meal=this.mealsService.getMealsDetails(id);
      console.log(this.meal)
  

  }

  // goTo()
  // {
  //     this.router.navigate(['browse-meals'])
  // }
} 

