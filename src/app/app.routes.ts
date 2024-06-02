import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseMealsComponent } from './pages/browse-meals/browse-meals.component';
import { BrowseItemsComponent } from './pages/browse-items/browse-items.component';
import { JoinCommunityComponent } from './join-community/join-community.component';
import { ViewDetailsComponent } from './pages/view-details/view-details.component';
import { FoodiesCommunityComponent } from './pages/foodies-community/foodies-community.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';


export const routes: Routes = [
    {
        title:'Join-Community',
        path:'join-community',
        component:JoinCommunityComponent
    },
   {
        title:'Home',
        path:'home',
        component:HomeComponent

   },
   {
    title:'Browse-Meals',
    path:'browse-meals',
    component:BrowseMealsComponent

},
   {
    title:'Browse-Items',
    path:'browse-items',
    component:BrowseItemsComponent

},
   {
    title:'View-Details',
    path:'view-details/:mId',
    component:ViewDetailsComponent
},
   {
    title:'Foodies-Community',
    path:'foodies-community',
    component:FoodiesCommunityComponent

},
   {
    title:'Add-Recipe',
    path:'add-recipe',
    component:AddRecipeComponent
},
    {
        path:'**',
        redirectTo:'home'
    }
];
