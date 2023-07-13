import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from 'src/schemas/recipe.schema';
import { TastesController } from './tastes.controller';
import { TastesService } from './tastes.service';
import { Restaurant, RestaurantSchema } from 'src/schemas/restaurant.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }, { name: Restaurant.name, schema: RestaurantSchema }])],
    controllers: [TastesController],
    providers: [TastesService],
    exports: [TastesService],
})
export class TastesModule {}
