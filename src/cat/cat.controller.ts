import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly appService: CatService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
  @Get("greet")
  public introduce(): string {
    return this.appService.introduce();
  }
}
