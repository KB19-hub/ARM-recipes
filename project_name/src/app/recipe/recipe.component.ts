import { Component } from '@angular/core';
import { ReviewService } from '../review-service.service'; // Replace with the correct path to your ReviewService
import { AuthService } from '../auth.service'; // Import the AuthService


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  userName: string = '';
  userReview: string = '';

  recipes = [
    {
      title: 'Zucchini, Fassoulia-style',
      image: 'assets/Pictures/Food/1.jpeg',
      ingredients: ['1 lb. ground meat', '1 medium onion (finely chopped)', '4 Tbsp. olive oil (divided)','2 medium cloves garlic (minced)'],
      instructions: ['Coat the bottom of a large pot with 2 Tbsp. of the olive oil. Add the ground turkey; cook on medium heat. Stir with a wooden spoon to break down the turkey until it is thoroughly cooked, about 5 minutes. Drain any accumulated fat. Remove cooked turkey from the pot and place in a bowl.', 
      'Using the same pot, heat the other 2 Tbsp. of olive oil over medium heat. Add the onions. Sprinkle with some salt and pepper; sauté until onions begin to soften, about 2-3 minutes. Add the garlic and zucchini and continue to cook until the zucchini cooks down a bit, about 5-7 minutes.',
       'Add the tomatoes with its juice, tomato and red pepper pastes, chicken broth, dried herbs, and seasonings. Bring to a boil, then reduce heat to medium. Cook about 5-10 minutes. You want to achieve a saucy, not soupy, consistency. Note: If you dont have red pepper paste, use additional tomato paste and add a little paprika.']
    },
    {
      title: 'Easter Spinach Salad',
      image: 'assets/Pictures/Food/2.jpg',
      ingredients: ['2 Tbsp. olive oil', '2 small cloves garlic (finely chopped)', '1 cup plain, Greek-style yogurt'],
      instructions: ['In a large non-stick skillet, gently heat the olive oil over medium heat. Add garlic and cook, stirring, for about 30 seconds or until it starts to brown Do not let garlic burn!', 
      'Add the spinach, a little at a time, stirring to coat with oil and garlic. Sauté until spinach is wilted, about 3-4 minutes. Remove skillet from heat, drain any excess liquid and allow spinach to cool, about 10 minutes. Note: Even though it looks like a huge amount of spinach, it cooks down very quickly.', 
      'n a mixing bowl, whisk yogurt until it is creamy. If yogurt seems a bit thick, stir-in a little warm water to loosen it up. Add salt and black pepper to taste, and Aleppo pepper, if desired. Stir to combine.']
    },
    {
      title: 'Tahnabour ',
      image: 'assets/Pictures/Food/3.jpg',
      ingredients: ['2 cups chicken broth (lower sodium or unsalted)', '1 handful quick-cooking barley', '1 16-oz. container of plain yogurt (Not Greek-style)'],
      instructions: ['Place chicken broth in a large saucepan, add a handful of quick-cooking barley, and cook until barley is tender, about 12-15 minutes. Set aside to cool.',
       'In a mixing bowl, add the plain yogurt, and whisk in one beaten egg until well combined. Set aside.',
        'Meantime, in a skillet, melt 2 Tbsp butter, and saute the minced onion, over a low heat until onions begin to caramelize, about 5-7 minutes; stir in 1 Tbsp. dried, crushed mint. As soon as the onion and butter turn a light brown, remove skillet from heat.']
    },
    {
      title: 'Spinach Pie' ,
      image: 'assets/Pictures/Food/4.jpg',
      ingredients: ['1 medium onion (chopped)', '¼ cup fresh dill (chopped – or – 2 tsp. dried dill)', '3 scallions (green onions) (green and white parts, sliced)'],
      instructions: ['Following package directions, thaw phyllo dough. You will only be using 1/2 the package for this recipe – about 16 sheets depending on the brand used.',
       'Preheat oven to 350ºF.',
        'In a small bowl, whisk together olive oil and melted butter. Heat 2-3 Tbsp. of the oil-butter mixture in a large sauté pan. Add scallions, onions and dill. Cook over medium-high heat until onions are soft and almost transparent. Add thawed, drained spinach and cook about 3 minutes. Mix in garlic and cook for an additional minute. Remove pan from heat and drain off any excess liquid; set aside to cool.']
    },
    {
      title: 'Gatnabour',
      image: 'assets/Pictures/Food/5.jpg',
      ingredients: ['4 cups milk (warm, but not hot)', 'pre-cooked rice (As mentioned in the first step below.)', '½ cup granulated sugar'],
      instructions: ['Add milk to the same 4-quart pot used in the first step. Heat milk until it is warm, but not boiling.', 
      'Add the al dente rice to the warm milk and cook, uncovered, on low to medium heat for about 45 minutes, stirring frequently. As the milk begins to evaporate the mixture should be thickening.',
       'Stir in the salt, sugar, and lemon zest; cook for 15- 20 minutes more and continue to stir. The mixture should begin to resemble thickened rice pudding.']
    },
    {
      title: 'Losh Kebab',
      image: 'assets/Pictures/Food/6.jpg',
      ingredients: ['¼ cup onion (finely chopped)', '¼ cup plain dry bread crumbs', '¼ cup fresh parsley (finely chopped)'],
      instructions: ['In a small mixing bowl, combine the beaten egg, red pepper (or tomato) paste, and seasonings. Blend well. Set aside.', 
      'Place meat, onions, parsley, and bread crumbs in a large mixing bowl. Using your hands, mix well. Add the egg mixture to the meat, mixing well until all ingredients are well-blended. (NOTE: If you’re squeamish about handling raw meat and egg, you may want to wear non-powdered, sterile, disposable food preparation gloves for this step.)', 
      'Shape mixture into 4 or 5 good-sized patties.']
    },
    // Add more recipes here
  ];
  successMessage: string = ''; // Initialize the success message variable

  constructor(
    private reviewService: ReviewService,
    private authService: AuthService // Inject the AuthService
  ) {}

  showSignInMessage: boolean = false; // Initialize the variable to control the message display

  submitReview(userName: string, review: string) {
    // Check if the user is logged in before allowing them to submit a review
    if (this.authService.isLoggedInValue()) {
      // Call the ReviewService to submit the review
      this.reviewService.submitReview(userName, review).subscribe(
        (response: any) => {
          if (response?.success) {
            // Clear the fields and show the success message
            this.userName = '';
            this.userReview = '';
            this.successMessage = response.message;
          } else {
            // Handle the case where the review submission was not successful
            this.successMessage = 'Error submitting review. Please try again later.';
          }
        },
        (error) => {
          console.error(error);
          this.successMessage = 'An error occurred. Please try again later.';
        }
      );
    } else {
      // Show the sign-in message to the user
      this.showSignInMessage = true;
    }
  }

  // Method to hide the sign-in message when the user clicks the close button
  hideSignInMessage() {
    this.showSignInMessage = false;
  }
}
