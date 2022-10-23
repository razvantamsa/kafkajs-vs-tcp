import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from 'apps/common/get-user-request.dto';
import { OrderCreatedEvent } from 'apps/common/order-created.event';

@Injectable()
export class BillingService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log(orderCreatedEvent);
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of ${orderCreatedEvent.price} ...`,
        );
      });
  }
}
