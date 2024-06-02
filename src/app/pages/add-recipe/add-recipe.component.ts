import { Component, OnInit } from '@angular/core';
import { MealsServiceService } from '../../meals-service.service';
import { Router } from '@angular/router';
import { MealsModel } from '../../model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent implements OnInit {

  public mealForm!:FormGroup;
  constructor(private mealsService:MealsServiceService,private router:Router,private fb:FormBuilder)
  {

  }

  ngOnInit(): void {
    this.mealForm=this.fb.group({
      id:[''],
      img:[''],
      title:[''],
      name:[''],
      about:[''],
      recipe:['']

    })
  }
  share()
  {
      this.mealsService.addRecipe(this.mealForm.value);
      this.goTo()
  }

  goTo()
  {
    this.router.navigate(['browse-meals'])
  }
}
