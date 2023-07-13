import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Restaurant } from './restaurant.schema';
import { Types } from "mongoose";

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {

    @Prop()
    kindFood: string;

    @Prop()
    nameFood: string;

    @Prop()
    preparation: string;


    @Prop(raw([{
        ingredient: { type: String },
        amount: { type: String }
      }]))
    ingredients: Record<string, any>[];

    @Prop({ type: [{ type: Types.ObjectId , ref: Restaurant.name }] })
    restaurants: Restaurant[];

}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);