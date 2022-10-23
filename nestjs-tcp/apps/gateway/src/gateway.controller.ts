import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequest } from 'apps/common/create-user-request.dto';
import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get()
  getHello(): string {
    return this.gatewayService.getHello();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    this.gatewayService.createUser(createUserRequest);
  }

  @Get('analytics')
  getAnalytics() {
    return this.gatewayService.getAnalytics();
  }
}
