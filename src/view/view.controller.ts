// view/controllers/view.controller.ts

import { Controller, Param, Put, Get } from '@nestjs/common';
import { ViewService } from './view.service';

@Controller('views')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Put(':id/increment')
  async incrementViewCount(@Param('id') id: string): Promise<{ count: number }> {
    const count = await this.viewService.incrementViewCount(id);
    return { count };
  }

  @Get(':id')
  async getViewCount(@Param('id') id: string): Promise<{ count: number | null }> {
    const count = await this.viewService.getViewCount(id);
    return { count };
  }
}
