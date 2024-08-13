import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'MYOW';
  }

  public introduce(): string {
    return 'My name is Tom';
  }
}
