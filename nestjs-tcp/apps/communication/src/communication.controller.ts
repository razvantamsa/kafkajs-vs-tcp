import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from 'apps/common/create-user.event';
import { CommunicationService } from './communication.service';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getHello(): string {
    return this.communicationService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    this.communicationService.handleUserCreated(data);
  }
}
