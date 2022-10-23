import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from 'apps/common/create-user.event';
import { AnalyticsService } from './analytics.service';

@Controller()
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  getHello(): string {
    return this.analyticsService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    this.analyticsService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    return this.analyticsService.getAnalytics();
  }
}
