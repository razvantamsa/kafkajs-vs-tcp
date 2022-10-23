import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'COMMUNICATION', transport: Transport.TCP },
      { name: 'ANALYTICS', transport: Transport.TCP, options: { port: 3002 } },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
