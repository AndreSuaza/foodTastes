import { Controller, Get, Query } from '@nestjs/common';
import { TastesService } from './tastes.service';

@Controller('tastes')
export class TastesController {

    constructor(private readonly tastesService: TastesService) {}

    @Get()
    getTaste(@Query() tastes: string) {
        return this.tastesService.findTastesFood(tastes);
    }



}
