import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PlatformModule } from './platform/platform.module';
import { OrderModule } from './order/order.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    UserModule,
    PlatformModule,
    OrderModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3001 },
      },
      {
        name: 'PLATFORM_SERVICE',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3002 },
      },
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3003 },
      },
    ]),
  ],
  providers: [],
})
export class AppModule {}
