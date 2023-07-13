import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Recipe } from 'src/schemas/recipe.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from 'src/schemas/restaurant.schema';

@Injectable()
export class TastesService {

    constructor(
        @InjectModel(Recipe.name) private recipeModel: Model<Recipe>,
        @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
        
        ) {}

    async findTastesFood( data: any ): Promise<Recipe[]> {
        
        if(!data || !data.tastes) {
            throw new NotFoundException ("The field tastes is required. if you want to place place various tastes of food you can separate them by (,)");
        }

        const param = data.tastes.split(',');
        const search = param.map((p: string) => new RegExp(p.trim(), 'i') );

        return this.recipeModel.find(
            { $or: [
                {kindFood: { $in: search }},
                {nameFood: { $in: search }}, 
                {preparation: { $in: search }}, 
                {"ingredients.ingredient": { $in: search }}
            ]}).populate("restaurants").exec();
    }

}

