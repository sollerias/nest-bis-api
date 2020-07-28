import { Injectable } from "@nestjs/common";
import { Auth } from "./auth.model";

@Injectable()
export class AuthService {
  private auth: Auth[] = [];

  verifyAccount(name: string, password: string) {
    console.log(name, password);
    return {name, password};
  };
};