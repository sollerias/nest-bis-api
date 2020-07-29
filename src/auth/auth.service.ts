import { Injectable } from "@nestjs/common";
import { Auth } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  // private auth: Auth[] = [];

  async verifyAccount(auth: Auth): Promise<Auth> {
    console.log('service auth: ', auth);
    return auth;
  };
};