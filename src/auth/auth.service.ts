import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ServiceEntity } from "./service.entity";
import { Auth } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  // private auth: Auth[] = [];
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly servicesRepository: Repository <ServiceEntity>,
  ) {};

  async verifyAccount(auth: Auth): Promise<Auth> {
    console.log('service auth: ', auth);
    return auth;
  };
};