import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';

@Injectable()
export class CocktailService {

  public tmp: Cocktail[] = [
    new Cocktail('Mojito', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', "Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910."),
    new Cocktail('Margarita', 'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg', "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila."),
    new Cocktail('Sour', 'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', "Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d'Amérique . C'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l'eau gazeuse à ceci le transforme en un gin fizz .")
  ];

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(this.tmp);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() {

    setTimeout(() => {
      console.log('Ajout d un cocktail apres 5s');
      this.tmp.push(new Cocktail("Bruno", "data:image/jpeg;base64,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", "No comment"));
      this.cocktails.next(this.tmp);
    }, 5000);

  }

  selectCocktail(index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }

}