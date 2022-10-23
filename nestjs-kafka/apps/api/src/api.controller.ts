import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderRequest } from 'apps/common/create-order-request.dto';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    console.log('here');
    this.apiService.createOrder(createOrderRequest);
    return 'done';
  }
}
