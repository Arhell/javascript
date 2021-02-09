import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpCode,
  Header,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  // @Redirect('https://some.com', 301)
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('Text');
    return 'getAll';
  }
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }
  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id;
  }
}
