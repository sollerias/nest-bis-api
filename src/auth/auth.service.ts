import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
  private client: ClientProxy;

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        url: 'nats://localhost:4221',
      },
    });
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return await this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const name = await this.userRepository.validateUserPasword(authCredentialsDto);

    if (!name) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { name };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }

  async sendMessage(username: string): Promise<any> {
    console.log(username);
    const myJson = {
      username,
      isAdmin: false
    }
    // .send<DataTypeToReceive, DataTypeToSend>('PathName', DataToSend)
    return this.client.send<
    { error: string, message: string, isAdmin: boolean },
    { username: string, isAdmin: boolean }
    >('message', myJson)
  }
}
