import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { query } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly appService: DogService) {}
  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
  @Get('greet/:id')
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.appService.introduce();
  }

  @Post('edit')
  public modifiyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.appService.modifiyDetail();
  }
}
