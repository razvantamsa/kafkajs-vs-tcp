import { Injectable } from '@nestjs/common';
import { GetUserRequest } from 'apps/common/get-user-request.dto';

@Injectable()
export class AuthService {
  private readonly users: any[] = [
    {
      userId: '345',
      stripeUserId: '27279',
    },
    {
      userId: '123',
      stripeUserId: '43234',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
