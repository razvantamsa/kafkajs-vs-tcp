import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'apps/common/create-user.event';

@Injectable()
export class CommunicationService {
  getHello(): string {
    return 'Hello Communication!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
    // TODO: Email the user...
  }
}
