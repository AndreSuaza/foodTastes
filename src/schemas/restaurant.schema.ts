import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {

    @Prop()
    name: string;

    @Prop()
    adress: string;

    @Prop()
    phone: string;

    @Prop()
    schedule: string;

}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);