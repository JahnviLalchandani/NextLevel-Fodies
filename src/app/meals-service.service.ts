import { Injectable } from '@angular/core';
import { MealsModel } from './model';
const MEALS:MealsModel[]=
[
  {
    id:'recipe1',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/burger.jpg?raw=true',
    title:'Juicy Cheese Burger',
    name:'by John Doe',
    about:'a mouth-watering burger with juicy beef patty and melted cheese,served in a soft bun.',
    recipe:{
      step1:'1. Prepare the pattyMix 200g of ground beef with salt and pepper. Form into a patty.',
      step2:'2. Cook the patty:Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.',
      step3:'3. Assemble the burger:Toast the burger bun halves. Place lettuce and tomato on the bottom half.',
      step4:' Add the cooked patty antop with a slice of cheese.',
      step5:'4. Serve:Complete the assembly with the top bun and serve not.'
    }
    
 
},
  {
    id:'recipe2',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/curry.jpg?raw=true',
    title:'Spicy Curry',
    name:'by Max Schwarz',
    about:'A rich spicy curry, infused with exotic spices and creamy coconut milk.',
    recipe:{
      step1:'1.Prepare the Curry Paste:\nIn a small bowl, combine the curry powder, ground cumin, ground coriander, turmeric powder, minced garlic, grated ginger, minced red chili, tomato paste, and vegetable oil. Mix well to form a paste.',
      step2:' 2.Cook the Curry:\n Heat vegetable oil in a large skillet or pot over medium heat. Add the chopped onion and sauté until softened and translucent, about 3-4 minutes.',
      step3:'3.Add the Curry Paste:\n  Add the prepared curry paste to the skillet with the vegetables. Stir well to coat the vegetables evenly with the paste. Cook for 2-3 minutes to allow the spices to release their flavors.',
      step4:'',
      step5:''
    }
    


},
  {
    id:'recipe3',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/dumplings.jpg?raw=true',
    title:'Homemade Dumplings',
    name:'by Emily Chen',
    about:'Tender dumplings filled with savory meat and vegetables,steamed to perfection.',
    recipe:{
      step1:'1.Prepare the Dumpling Dough:In a large mixing bowl, combine the all-purpose flour and salt.',
      step2:'2.Make the Filling:In another mixing bowl, combine the ground pork or chicken, minced garlic, chopped green onions, soy sauce, sesame oil, salt, pepper, and any optional vegetables.',
      step3:'3.Shape the Dumplings:Roll out the rested dough into a long cylinder shape, then cut it into small pieces about the size of a walnut.',
      step4:'',
      step5:''
    }
    
},
  {
    id:'recipe4',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/macncheese.jpg?raw=true',
    title:'Classic Mac n Cheese',
    name:'by Laura Smith',
    about:'Creamy and cheesy macroni, a comforting classic that\'s always a crowd-pleaser.',
    recipe:{
      step1:'1.Cook the Pasta:\n Cook the pasta according to package instructions in a pot of salted boiling water until al dente. Drain and set aside..',
      step2:'2.Make the Cheese Sauce:\nIn a large saucepan, melt the butter over medium heat.',
      step3:'3.Combine Pasta and Cheese Sauce:\nAdd the cooked pasta to the cheese sauce and stir until well combined, ensuring that all the pasta coated with the creamy cheese sauce.',
      step4:'4.Optional Breadcrumb Topping:\nIf desired, you can sprinkle breadcrumbs on top of the `\n`macaroni and cheese for a crunchy topping.',
      step5:''
    }
   
},
  {
    id:'recipe5',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/pizza.jpg?raw=true',
    title:'Authentic Pizza',
    name:'by Mario Rossi',
    about:'Hand-tossed pizza with a tangy tomato sauce,fresh toppings, and melted cheese.',
    recipe:{
      step1:'1.Make Dough:Mix flour, sugar, yeast, and salt. Add warm water and olive oil. Knead until smooth. Let rise for 1hours.',
    step2:'2.Make Sauce:Cook minced garlic in olive oil. Add crushed tomatoes, oregano, salt, and pepper. Simmer for 15-minutes.',
    step3:'3.Prep Oven:Preheat oven to 500°F (260°C). Place a pizza stone or baking sheet inside to heat.Shape Dough:Divide dough and roll out into circles. Place on parchment paper.Assemble Pizza:Spread sauce on dough. Add cheese and desired toppings.',
    step4:'6.Bake Pizza:Transfer pizza (with parchment paper) to preheated stone or sheet. Bake for 10-12 minutes.',
    step5:'7.Finish:Garnish with basil and Parmesan. Slice and serve hot.'
    }
    

},
  {
    id:'recipe6',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/schnitzel.jpg?raw=true',
    title:'Wiener Schnitzel',
    name:'by Franz Huber',
    about:'Crispy,golden-brown breaded veal cutlet, a classic Austrian dish.',
    recipe:{
      step1:'1.Prepare the Veal Cutlets: Place each veal cutlet between two sheets of plastic wrap or wpaper. Use a meat mallet or the flat side of a heavy pan to pound the cutlets until they are about4 inch thick. Season both sides of the cutlets with salt and peppe.',
      step2:'2.Set Up Breading Station: Set up a breading station with three shallow dishes. Place flour in odish, whisk eggs and water together in the second dish, and place breadcrumbs in the third dish.',
      step3:'3.Dredge the Cutlets: Dredge each veal cutlet in the flour, shaking off any excess. Then dip it inthe beaten egg mixture, allowing any excess to drip off. Finally, coat the cutlet with breadcrumbpressing gently to adhere. Repeat with the remaining cutlet.',
      step4:'4.Heat Vegetable Oil: In a large skillet, heat vegetable oil over medium-high heat until it reachabout 350°F (175°C). Youll need enough oil to generously cover the bottom of the skillet.Fry the Cutlets: Carefully place the breaded veal cutlets in the hot oil, being careful not overcrowd the skillet. Fry the cutlets for about 2-3 minutes on each side, or until they are goldbrown and cooked through. Use a spatula to carefully flip them halfway through cooking',
      step5:'6.Drain and Serve: Once cooked, transfer the Wiener Schnitzel to a plate lined with paper towels drain any excess oil. Serve immediately while still hot, garnished with lemon wedges on the side.'
    }
   
},

  {
    id:'recipe7',
    img:'https://github.com/dina-mohamed52/nextLevel-Food-next-js-/blob/main/app/assets/tomato-salad.jpg?raw=true',
    title:'Fresh Tomato Salad',
    name:'by Sophia Green',
    about:'A light and refreshing salad with ripe tomatoes fresh basil, and a tangy vinaigrette .',
    recipe:{
      step1:'1.Prepare the Tomatoes: Wash the tomatoes thoroughly under cold water. Slice them into rounor wedges, depending on your preference. Place the sliced tomatoes in a large mixing bowl',
      step2:'2.Add Onion and Basil: Thinly slice the red onion and tear the fresh basil leaves. Add them to tbowl with the sliced tomatoes',
      step3:'3.Dress the Salad: Drizzle the extra virgin olive oil and balsamic vinegar over the tomato mixturSeason with salt and freshly ground black pepper to taste',
      step4:'Toss to Combine: Gently toss the salad ingredients together until everything is evenly coated withe dressing. Be careful not to crush the tomatoes',
      step5:''
    }
        
    
   
},
];
@Injectable({
  providedIn: 'root'
})
export class MealsServiceService {
  private meals:MealsModel[]=MEALS;
  constructor() { }

  getMealsList():MealsModel[]
  {
      return this.meals;
      
  }


  getMealsDetails(mId:string):MealsModel| undefined
  {
    return this.meals.find((meal:MealsModel)=>{
      
      return meal.id==mId;
    })
  }

  addRecipe(meal:MealsModel):MealsModel
  {
    meal.id='recipe1'+Math.floor(Math.random())
    
    // let l= this.meals.length

    return this.meals[0]=meal
    
  }
}
