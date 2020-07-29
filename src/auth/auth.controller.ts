import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { Auth } from "./interfaces/auth.interface";

@Controller('api')
export class AuthController {
  constructor (private readonly authService: AuthService) {};

  @Post('auth')
  // verifyAccount(
  //   @Body('name') accName: string,
  //   @Body('password') accPass: string
  // ): any {
  //   const verify = this.authService.verifyAccount(accName, accPass);

  //   return verify;
  // };

  async verifyAccount(@Body() data: AuthDto): Promise<Auth> {
    console.log('post data: ', data);
    return this.authService.verifyAccount(data);
  };


  // @Post('auth/refresh_token')
  // refreshToken() {};
};