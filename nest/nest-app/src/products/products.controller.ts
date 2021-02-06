import { Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll';
  }
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }
  @Post()
  create() {

  }
  @Delete()
  remove() {

  }
  @Put()
  update() {

  }
}
