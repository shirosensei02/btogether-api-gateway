import { Controller, Get, Post, Body } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    @Inject('PLATFORM_SERVICE')
    private readonly platformServiceClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderServiceClient: ClientProxy,
  ) {}

  // Get all users
  @Get('users')
  findAllUsers(): Observable<any> {
    return this.userServiceClient.send('find_all_users', {});
  }

  // Create a new user
  @Post('users')
  createUser(@Body() createUserDto: any): Observable<any> {
    return this.userServiceClient.send('create_user', createUserDto);
  }

  // Get all platforms
  @Get('platforms')
  findAllPlatforms(): Observable<any> {
    return this.platformServiceClient.send('find_all_platforms', {});
  }

  // Create a new platform
  @Post('platforms')
  createPlatform(@Body() createPlatformDto: any): Observable<any> {
    return this.platformServiceClient.send(
      'create_platform',
      createPlatformDto,
    );
  }

  // Get all orders
  @Get('orders')
  findAllOrders(): Observable<any> {
    return this.orderServiceClient.send('find_all_orders', {});
  }

  // Create a new order
  @Post('orders')
  createOrder(@Body() createOrderDto: any): Observable<any> {
    return this.orderServiceClient.send('create_order', createOrderDto);
  }
}
