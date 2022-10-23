import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from 'apps/common/create-order-request.dto';
import { OrderCreatedEvent } from 'apps/common/order-created.event';

@Injectable()
export class ApiService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello WUUUT!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
