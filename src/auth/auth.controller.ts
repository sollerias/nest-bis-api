import { Controller, Post, Body, ValidationPipe, UseGuards, Req, Logger } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');

  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void>{
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe)  authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }>{
    return this.authService.signIn(authCredentialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }

  @Post('/message')
  async sendMessage(@Body('username') username: string): Promise<any> {
    this.logger.log(`Send message: ${username}`);

    return await this.authService.sendMessage(username);
  }
}
