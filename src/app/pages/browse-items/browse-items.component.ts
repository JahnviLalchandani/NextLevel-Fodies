import { Component, Input } from '@angular/core';
import { MealsServiceService } from '../../meals-service.service';
import { MealsModel } from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-items',
  standalone: true,
  imports: [],
  templateUrl: './browse-items.component.html',
  styleUrl: './browse-items.component.scss'
})
export class BrowseItemsComponent {
  @Input() meal!:MealsModel;

 

  constructor(private router:Router){}

  goTo(id:string)
  {
    this.router.navigate(['view-details',id])
    console.log(id);
    
  }
}
