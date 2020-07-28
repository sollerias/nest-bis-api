import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('api')
export class AuthController {
  constructor (private readonly authService: AuthService) {};

  @Post('auth')
  verifyAccount(
    @Body('name') accName: string,
    @Body('password') accPass: string
  ): any {
    const verify = this.authService.verifyAccount(accName, accPass);

    return verify;
  };

  // @Post('auth/refresh_token')
  // refreshToken() {};
};