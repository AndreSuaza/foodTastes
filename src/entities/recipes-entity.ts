import { Restaurant } from "./restauranti-entity";

export class Rrecipes {
    id: string;
    kindFood: string;
    nameFood: string;
    preparation: string;
    ingredients: string[];
    restaurants: Restaurant[];
}